import { useState } from 'react';
import clsx from 'clsx';

import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import { menuPrivateConfig } from '~/config/menuConfig.js';

import MenuList from '~/components/MenuList';

function Sidebar() {
    const [showPopper, setShowPopper] = useState(false);

    return (
        <header className={clsx(styles['wrapper'], showPopper && styles['collapsed'])}>
            <aside className={styles['sidebar']}>
                <img
                    className={styles['logo']}
                    src={showPopper ? images.logoIcon : images.logo}
                    alt="Tiktok"
                />

                <MenuList
                    className={styles['menu-list']}
                    menuList={menuPrivateConfig}
                    isCollapsed={showPopper}
                    onCollapsed={(e) => setShowPopper(true)}
                    onHideCollapsed={(e) => setShowPopper(false)}
                />
            </aside>
        </header>
    );
}

export default Sidebar;
