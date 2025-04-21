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
    const [isCollapse, setIsCollapse] = useState(true);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 2000);
    }, []);

    return (
        <header className={clsx(styles['wrapper'], isCollapse && styles['collapsed'])}>
            <aside className={styles['sidebar']}>
                <img className={styles['logo']} src={isCollapse ? images.logoIcon : images.logo} alt="Tiktok" />

                {/* Start: Search suggestion */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    placement="right"
                    render={(attrs) => (
                        <WrapperPopper title="Search">
                            <div tabIndex="-1" {...attrs}>
                                <input className={styles['search-popper-input']} type="text" placeholder="Search" />
                                <div className={styles['search-popper-result']}>
                                    <p className={styles['search-popper-suggest']}>You may like</p>
                                    <ul className={styles['search-popper-list']}>
                                        {trendsData.map((trend) => (
                                            <TrendItem key={trend.id} trend={trend} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </WrapperPopper>
                    )}
                >
                    <div className={clsx(styles['search'], isCollapse && styles['collapsed'])}>
                        <button className={styles['search-btn']}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input type="text" placeholder="Search" disabled />
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
                                isCollapse={isCollapse}
                            />
                        ))}
                </ul>
            </aside>
        </header>
    );
}

export default Sidebar;
