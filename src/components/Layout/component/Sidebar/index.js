import styles from './Sidebar.module.scss';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import { menuPrivateConfig } from '~/config/menuConfig.js';
import MenuItem from '~/components/MenuItem';

function Sidebar() {
    const isCurrentPath = useLocation().pathname;

    return (
        <header className={styles['wrapper']}>
            <aside className={styles['sidebar']}>
                <img className={styles['logo']} src={images.logo} alt="Tiktok" />
                <div className={styles['search']}>
                    <button className={styles['search-btn']}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input type="text" placeholder="Search" disabled />
                </div>

                <ul className={styles['menu-list']}>
                    {menuPrivateConfig
                        .sort((itemA, itemB) => itemA.orderIndex - itemB.orderIndex)
                        .map((item) => (
                            <MenuItem key={item.orderIndex} menu={item} isCurrentPath={isCurrentPath === item.path} />
                        ))}
                </ul>
            </aside>
        </header>
    );
}

export default Sidebar;
