import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuItem.module.scss';
import PopperSidebar from '~/components/Layout/component/Sidebar/PopperSidebar';
import Button from '~/components/Button';

function HasPopper({ item, isCurrentPath, isCollapsed, children, onCollapsed, onHideCollapsed }) {
    const [showPopper, setShowPopper] = useState(false);
    const [history, setHistory] = useState([item]);
    let current = history[history.length - 1];

    const itemChildren = item.children;

    // itemChildren -> has children -> render
    // itemChildren -> has data -> render <spna>Has data</spna>

    const hasData = itemChildren.data;

    const contentHasChildren = () => {
        const itemChildren = current.children;

        const switchContent = (newItem) => {
            setHistory((pre) => [...pre, newItem]);
        };

        return (
            itemChildren && (
                <ul>
                    {itemChildren.map((item) => (
                        <Button
                            noGap
                            canHover
                            round
                            customClasses={[styles['subMenu-item']]}
                            key={item.orderIndex}
                            rightIcon={item.children && faChevronRight}
                            onClick={() => {
                                item.children && switchContent(item.children);
                            }}
                        >
                            {item.title}
                        </Button>
                    ))}
                </ul>
            )
        );
    };

    const contentHasData = () => {
        if (item.contentPopper && typeof item.contentPopper === 'function') {
            return item.contentPopper();
        }
        return <h3>There is not data</h3>;
    };

    const handleBack = () => {
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };

    const handleClickItem = (item) => {
        isCollapsed ? handleHidePopper() : handleShowPopper(item);
    };

    const handleShowPopper = (item) => {
        setShowPopper(true);
        setHistory((pre) => [...pre, item.children]);

        onCollapsed();
    };

    const handleHidePopper = () => {
        setShowPopper(false);

        onHideCollapsed();
    };

    console.groupEnd();

    return (
        <PopperSidebar
            sticky={item.sticky || null}
            title={current.title}
            visible={isCollapsed && showPopper}
            onClickOutside={handleHidePopper}
            render={hasData ? contentHasData : contentHasChildren}
            onBack={history.length > 2 ? handleBack : null}
            onHide={(e) => setHistory((pre) => pre.slice(0, 1))}
        >
            <Link
                to={item.path}
                className={clsx(
                    styles['menu-item'],
                    isCurrentPath && styles['active'],
                    item.orderIndex === 0 && styles['menu-search'],
                )}
                onClick={(e) => handleClickItem(item)}
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

export default HasPopper;
