import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './MenuItem.module.scss';
import { useEffect, useState } from 'react';
import PopperSidebar from '~/components/Layout/component/Sidebar/PopperSidebar';
import Button from '~/components/Button';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function MenuItem({ item, isCurrentPath, isCollapsed, children }) {
    let Comp = () => (
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

    const [history, setHistory] = useState([item]);
    const [showPopper, setShowPopper] = useState(false);
    let current = history[history.length - 1];

    // useEffect(() => {
    //     console.log('Final current: ', current);
    //     console.log('Final history: ', history);
    //     console.log('Final history length: ', history.length - 1);

    //     console.log('Final current his: ', history[history.length - 1]);
    // });

    const hasChildren = !!item.children;

    if (hasChildren) {
        // console.log('Item: ', item);
        console.log('MenuItem has Sub: ', history);
        console.log('MenuItem has current: ', current);

        const contentSubMenu = () => {
            const itemChildren = current.children;

            const switchContent = (newItem) => {
                console.log('Switch...');

                setHistory((pre) => [...pre, newItem]);
            };

            console.log('children: ', itemChildren);
            return (
                itemChildren && (
                    <ul>
                        {itemChildren?.children.map((item) => (
                            <Button
                                noGap
                                canHover
                                round
                                customClasses={[styles['subMenu-item']]}
                                key={item.orderIndex}
                                rightIcon={item.children && faChevronRight}
                                onClick={() => {
                                    item.children && switchContent(item);
                                }}
                            >
                                {console.log('title: ', item)}
                                {item.title}
                            </Button>
                        ))}
                    </ul>
                )
            );
        };

        const handleHidePopper = () => {
            setShowPopper(false);
        };
        const handleShowPopper = () => {
            setShowPopper(true);
        };

        const handleBack = () => {
            setHistory((pre) => pre.slice(0, pre.length - 1));
        };

        Comp = () => (
            <PopperSidebar
                title={current.title}
                visible={showPopper}
                onClickOutside={handleHidePopper}
                render={contentSubMenu}
                onBack={history.length > 1 ? handleBack : null}
            >
                <Link
                    to={item.path}
                    className={clsx(styles['menu-item'], isCurrentPath && styles['active'])}
                    onClick={handleShowPopper}
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
            </PopperSidebar>
        );
    }

    return (
        <li>
            <Comp />
        </li>
    );
}

export default MenuItem;
