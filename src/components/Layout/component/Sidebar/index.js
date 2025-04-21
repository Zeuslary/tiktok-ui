import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import styles from './Sidebar.module.scss';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import { menuPrivateConfig } from '~/config/menuConfig.js';
import MenuItem from '~/components/MenuItem';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import TrendItem from '~/components/TrendItem';
import { trendsData } from '~/config/trendConfig';

function Sidebar() {
    const isCurrentPath = useLocation().pathname;
    const [showPopper, setShowPopper] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        console.log('-------showPopper----------');

        console.log('useEffect: showPopper', showPopper);
        console.log('useEffect: searchResult', searchResult);
    }, [showPopper, searchResult]);

    const togglePopper = () => {
        const willShow = !showPopper;
        console.log('willShow', willShow);

        if (willShow) {
            handleShowPopper();
        } else {
            handleHidePopper();
        }
    };

    const handleHidePopper = () => {
        console.log('handleHidePopper');
        setShowPopper(false);
        setSearchResult([]);
    };

    const handleShowPopper = () => {
        console.log('handleShowPopper');
        setShowPopper(true);
        setSearchResult([...trendsData]);
    };

    console.log('-------Start----------');
    return (
        <header className={clsx(styles['wrapper'], showPopper && styles['collapsed'])}>
            <aside className={styles['sidebar']}>
                <img className={styles['logo']} src={showPopper ? images.logoIcon : images.logo} alt="Tiktok" />

                {/* Start: Search suggestion */}
                <Tippy
                    interactive
                    visible={showPopper}
                    onClickOutside={handleHidePopper}
                    placement="right"
                    render={(attrs) =>
                        showPopper && (
                            <WrapperPopper title="Search">
                                <div tabIndex="-1" {...attrs}>
                                    <input className={styles['search-popper-input']} type="text" placeholder="Search" />
                                    <div className={styles['search-popper-result']}>
                                        <p className={styles['search-popper-suggest']}>You may like</p>
                                        <ul className={styles['search-popper-list']}>
                                            {searchResult.map((trend) => (
                                                <TrendItem key={trend.id} trend={trend} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </WrapperPopper>
                        )
                    }
                >
                    <div className={clsx(styles['search'], showPopper && styles['collapsed'])}>
                        <button className={styles['search-btn']} onClick={togglePopper}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input type="text" placeholder="Search" onFocus={handleShowPopper} />
                    </div>
                </Tippy>
                {/* End: Search suggestion */}

                {/* List item of menu */}
                <ul className={styles['menu-list']}>
                    {menuPrivateConfig
                        .sort((itemA, itemB) => itemA.orderIndex - itemB.orderIndex)
                        .map((item) => (
                            <MenuItem
                                key={item.orderIndex}
                                menu={item}
                                isCurrentPath={isCurrentPath === item.path}
                                isCollapse={showPopper}
                            />
                        ))}
                </ul>
            </aside>
        </header>
    );
}

export default Sidebar;
