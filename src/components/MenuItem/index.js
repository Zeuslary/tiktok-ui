import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './MenuItem.module.scss';

function MenuItem({ menu, isCurrentPath, isCollapse }) {
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

    console.log('Is collapse', isCollapse);

    return (
        <li>
            <Link
                className={clsx(
                    styles['menu-item'],
                    isCurrentPath && styles['active'],
                    isCollapse && styles['collapsed'],
                    (menu.orderIndex === 1 || menu.orderIndex === 2) && styles['deflect-left'],
                )}
                to={menu.path}
            >
                <Icon {...obj} />
                <span>{menu.title}</span>
            </Link>
        </li>
    );
}

export default MenuItem;
