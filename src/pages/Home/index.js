import {
    faArrowRightFromBracket,
    faCircleDollarToSlot,
    faDownload,
    faMobileScreen,
    faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Home.module.scss';
import ButtonIcon from '~/components/ButtonIcon';
import images from '~/assets/images';
import Button from '~/components/Button';

const CONTROLS_ACTION = [
    {
        tooltip: 'Get coins',
        icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
    },
    {
        tooltip: 'Get Apps',
        icon: <FontAwesomeIcon icon={faMobileScreen} />,
    },
    {
        tooltip: 'PC App',
        icon: <FontAwesomeIcon icon={faDownload} />,
    },
    {
        src: images.zuri,
        children: {
            data: [
                {
                    icon: <FontAwesomeIcon icon={faUser} />,
                    title: 'View profile',
                },
                {
                    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
                    title: 'Log out',
                },
            ],
        },
    },
];

function Home() {
    console.log('Re-render');

    return (
        <div className={styles['home']}>
            <h2>Home page</h2>
            <div className={styles['controls']}>
                <ButtonIcon icon={faQuestion} small canHover />

                {/* {CONTROLS_ACTION.map((controlAction, index) => (
                    <Tippy
                        key={index}
                        delay={[0, 150]}
                        placement="bottom"
                        content={
                            <span className={styles['tooltipPopper']}>
                                {controlAction.tooltip}
                            </span>
                        }
                    >
                        {console.log(controlAction)}
                    </Tippy>
                ))} */}

                <ButtonIcon customClasses={[styles['control-user-btn']]} src={images.zuri}>
                    <div className={styles['menu-list']}>
                        {/* {USER_CONTROLS.map((item, index) => (
                            <Button
                                customClasses={[styles['custom-user-control']]}
                                key={index}
                                leftIcon={item.icon}
                                noGap
                                large
                                canHover
                            >
                                {item.title}
                            </Button>
                        ))} */}
                    </div>
                </ButtonIcon>
            </div>
        </div>
    );
}

export default Home;
