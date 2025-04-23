import {
    faArrowRightFromBracket,
    faCircleDollarToSlot,
    faDownload,
    faMobileScreen,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.scss';

import ButtonIcon from '~/components/ButtonIcon';
import images from '~/assets/images';
import Button from '~/components/Button';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useCallback, useState } from 'react';

const CONTROLS_ACTION = [
    {
        icon: faCircleDollarToSlot,
        tooltip: 'Get coins',
    },
    {
        icon: faMobileScreen,
        tooltip: 'Get Apps',
    },
    {
        icon: faDownload,
        tooltip: 'PC App',
    },
];

const USER_CONTROLS = [
    {
        icon: faUser,
        title: 'View profile',
    },
    {
        icon: faArrowRightFromBracket,
        title: 'Log out',
    },
];

function Home() {
    const [openUserControl, setOpenUserControl] = useState(false);

    const renderControls = useCallback(() => {
        return CONTROLS_ACTION.map((controlAction, index) => (
            <ButtonIcon
                key={index}
                icon={controlAction.icon}
                small
                canHover
                tooltip={controlAction.tooltip}
                placement="bottom"
                delay={[0, 150]}
            />
        ));
    }, []);

    console.log('Re-render');

    return (
        <div className={styles['home']}>
            <h2>Home page</h2>
            <div className={styles['controls']}>
                {renderControls()}
                <ButtonIcon
                    customClasses={[styles['control-user-btn']]}
                    src={images.zuri}
                    small
                    placement="bottom-end"
                    visible={openUserControl}
                    onOpenPopper={() => setOpenUserControl(true)}
                    onHiddenPopper={() => setOpenUserControl(false)}
                >
                    <div className={styles['menu-list']}>
                        {USER_CONTROLS.map((item, index) => (
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
                        ))}
                    </div>
                </ButtonIcon>
            </div>
        </div>
    );
}

export default Home;
