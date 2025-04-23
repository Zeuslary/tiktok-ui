import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import styles from './Sidebar.module.scss';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import { menuPrivateConfig } from '~/config/menuConfig.js';
import TrendItem from '~/components/TrendItem';
import { trendsData } from '~/config/trendConfig';
import MenuList from '~/components/MenuList';
import PopperSidebar from './PopperSidebar';

function Sidebar() {
    const [showPopper, setShowPopper] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

    // useEffect(() => {
    //     // console.log('-------showPopper----------');

    //     // console.log('useEffect: showPopper', showPopper);
    //     // console.log('useEffect: searchResult', searchResult);
    // }, [showPopper, searchResult]);

    const togglePopper = () => {
        const willShow = !showPopper;
        // console.log('willShow', willShow);

        if (willShow) {
            handleShowPopper();
        } else {
            handleHidePopper();
        }
    };

    const handleHidePopper = useCallback(() => {
        // console.log('handleHidePopper');
        setShowPopper(false);
        setSearchResult([]);
    }, []);

    const handleShowPopper = useCallback(() => {
        // console.log('handleShowPopper');
        setShowPopper(true);
        setSearchResult([...trendsData]);
    }, []);

    const renderSearchResult = () => (
        <>
            <input className={styles['search-popper-input']} type="text" placeholder="Search" />
            <div className={styles['search-popper-result']}>
                <p className={styles['search-popper-suggest']}>You may like</p>
                <ul className={styles['search-popper-list']}>
                    {searchResult.map((trend) => (
                        <TrendItem key={trend.id} trend={trend} />
                    ))}
                </ul>
            </div>
        </>
    );

    return (
        <header className={clsx(styles['wrapper'], showPopper && styles['collapsed'])}>
            <aside className={styles['sidebar']}>
                <img
                    className={styles['logo']}
                    src={showPopper ? images.logoIcon : images.logo}
                    alt="Tiktok"
                />

                {/* Start: Search suggestion */}
                <PopperSidebar
                    title="Search"
                    visible={showPopper}
                    onClickOutside={handleHidePopper}
                    render={renderSearchResult}
                >
                    <div className={clsx(styles['search'], showPopper && styles['collapsed'])}>
                        <button className={styles['search-btn']} onClick={togglePopper}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input type="text" placeholder="Search" onFocus={handleShowPopper} />
                    </div>
                </PopperSidebar>
                {/* End: Search suggestion */}

                {/* Display menu to screen */}
                <MenuList
                    className={styles['menu-list']}
                    menuList={menuPrivateConfig}
                    isCollapsed={showPopper}
                />
            </aside>
        </header>
    );
}

export default Sidebar;
