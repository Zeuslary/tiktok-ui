import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import styles from './MenuItem.module.scss';

function MenuItem({ menu, isCurrentPath }) {
    let Icon = FontAwesomeIcon;
    let obj = {};
    if (menu.icon) {
        obj = {
            className: styles['menu-icon'],
            icon: menu.icon,
        };
    } else if (menu.img) {
        Icon = 'img';
        obj = {
            src: menu.img,
            alt: 'Img of user',
        };
    }

    return (
        <li>
            <Link className={clsx(styles['menu-item'], isCurrentPath && styles['active'])} to={menu.path}>
                <Icon {...obj} />
                <span>{menu.title}</span>
            </Link>
        </li>
    );
}

export default MenuItem;
