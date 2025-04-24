import { useLocation } from 'react-router-dom';
import styles from './MenuList.module.scss';

import MenuItem from './MenuItem';
import clsx from 'clsx';

function MenuList({ menuList, isCollapsed, onCollapsed, onHideCollapsed }) {
    const isCurrentPath = useLocation().pathname;

    return (
        <ul className={clsx(styles['wrapper'])}>
            {menuList
                .sort((itemA, itemB) => itemA.orderIndex - itemB.orderIndex)
                .map((item) => (
                    <MenuItem
                        item={item}
                        key={item.orderIndex}
                        isCurrentPath={isCurrentPath === item.path}
                        isCollapsed={isCollapsed}
                        onCollapsed={onCollapsed}
                        onHideCollapsed={onHideCollapsed}
                    />
                ))}
        </ul>
    );
}

export default MenuList;
