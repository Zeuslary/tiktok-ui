import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './MenuItem.module.scss';

function NoPopper({ item, isCollapsed, isCurrentPath, children }) {
    return (
        <Link
            to={item.path}
            className={clsx(styles['menu-item'], isCurrentPath && styles['active'])}
        >
            {item.icon && <i className={styles['menu-icon']}>{item.icon}</i>}
            {item.img && (
                <i className={styles['menu-icon']}>
                    <img className={styles['menu-img']} src={item.img} alt={item.title} />
                </i>
            )}
            {!isCollapsed && <span>{item.title}</span>}
            <div>{children}</div>
        </Link>
    );
}

export default NoPopper;
