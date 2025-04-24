import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Home.module.scss';
import ButtonIcon from '~/components/ButtonIcon';
import images from '~/assets/images';
import Button from '~/components/Button';
import { AppIcon, CoinIcon, DownloadIcon } from '~/components/Icon';
import Tippy from '@tippyjs/react';
import MenuItem from '~/components/MenuList/MenuItem';
import MenuList from '~/components/MenuList';
import TippyHeadless from '@tippyjs/react/headless';

const CONTROLS_ACTION = [
    {
        tooltip: 'Get coins',
        icon: <CoinIcon width="1.5rem" height="1.5rem" />,
    },
    {
        tooltip: 'Get Apps',
        icon: <AppIcon width="1.4rem" height="1.4rem" />,
    },
    {
        tooltip: 'Download',
        icon: <DownloadIcon width="1.5rem" height="1.5rem" />,
    },
];

const USER_CONTROL = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
    },
];

function Home() {
    console.log('Re-render');

    return (
        <div className={styles['home']}>
            <h2>Home page</h2>
            <div className={styles['controls']}>
                {CONTROLS_ACTION.map((item, index) => (
                    <Tippy key={index} content={item.tooltip} delay={[0, 150]} placement="bottom">
                        <span className={styles['control-btn']}>{item.icon}</span>
                    </Tippy>
                ))}

                <TippyHeadless
                    trigger="click"
                    interactive
                    offset={[10, 10]}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <ul className={styles['control-list-user']}>
                                {USER_CONTROL.map((item, index) => (
                                    <MenuItem key={index} item={item}></MenuItem>
                                ))}
                            </ul>
                        </div>
                    )}
                >
                    <span className={styles['control-user-btn']}>
                        <img src={images.zuri} alt="User" />
                    </span>
                </TippyHeadless>
            </div>
        </div>
    );
}

export default Home;
