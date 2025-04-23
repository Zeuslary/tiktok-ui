import {
    faHouse,
    faUserGroup,
    faUserPlus,
    faSquarePlus,
    faCompass,
    faMessage,
    faBell,
    faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import menuPaths from './routersPath';

const menuPublicConfig = [
    {
        orderIndex: 1,
        title: 'For You',
        path: menuPaths.home,
        icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        orderIndex: 2,
        title: 'Explore',
        path: menuPaths.explore,
        icon: <FontAwesomeIcon icon={faCompass} />,
    },
    {
        orderIndex: 3,
        title: 'Following',
        path: menuPaths.following,
        icon: <FontAwesomeIcon icon={faUserPlus} />,
    },
    {
        orderIndex: 5,
        title: 'Upload',
        path: menuPaths.upload,
        icon: <FontAwesomeIcon icon={faSquarePlus} />,
    },
    {
        orderIndex: 8,
        title: 'Profile',
        path: menuPaths.profile,
        img: images.zuri,
    },
    {
        orderIndex: 9,
        title: 'More',
        path: null,
        icon: <FontAwesomeIcon icon={faEllipsis} />,
        children: {
            title: 'More',
            children: [
                {
                    orderIndex: 1,
                    title: 'Get Coins',
                },
                {
                    orderIndex: 2,
                    title: 'Create Tiktok effects',
                },
                {
                    orderIndex: 3,
                    title: 'Creator tools',
                    children: {
                        title: 'Creator tools',
                        children: [
                            {
                                orderIndex: 1,
                                title: 'Promote post',
                            },
                            {
                                orderIndex: 2,
                                title: 'View Analytics',
                            },
                            {
                                orderIndex: 3,
                                title: 'LIVE Creator Hub',
                            },
                            {
                                orderIndex: 4,
                                title: 'LIVE Studio',
                            },
                        ],
                    },
                },
                {
                    orderIndex: 4,
                    title: 'English (US)',
                    children: {
                        title: 'Language',
                        children: [
                            {
                                orderIndex: 1,
                                title: 'English (US)',
                                code: 'en',
                            },
                            {
                                orderIndex: 2,
                                title: 'Tiếng Việt',
                                code: 'vi',
                            },
                            {
                                orderIndex: 3,
                                title: 'Suomi',
                                code: 'fi',
                            },
                            {
                                orderIndex: 4,
                                title: 'Norsk',
                                code: 'no',
                            },
                            {
                                orderIndex: 5,
                                title: 'Svenska',
                                code: 'se',
                            },
                            {
                                orderIndex: 6,
                                title: 'Dansk',
                                code: 'dk',
                            },
                            {
                                orderIndex: 7,
                                title: 'Schweizerdeutsch',
                                code: 'ch',
                            },
                            {
                                orderIndex: 8,
                                title: 'Nederlands',
                                code: 'nl',
                            },
                        ],
                    },
                },
                {
                    orderIndex: 5,
                    title: 'Dark mode',
                    children: {
                        title: 'Dark mode',
                        children: [
                            {
                                orderIndex: 1,
                                title: 'Automatic',
                            },
                            {
                                orderIndex: 2,
                                title: 'Dark made',
                            },
                            {
                                orderIndex: 3,
                                title: 'Light mode',
                            },
                        ],
                    },
                },
                {
                    orderIndex: 6,
                    title: 'Settings',
                },
                {
                    orderIndex: 7,
                    title: 'Feedback and help',
                },
                {
                    orderIndex: 8,
                    title: 'Log out',
                },
            ],
        },
    },
];

const menuPrivateConfig = [
    ...menuPublicConfig,
    {
        orderIndex: 6,
        title: 'Activity',
        path: menuPaths.activity,
        icon: <FontAwesomeIcon icon={faBell} />,
    },
    {
        orderIndex: 7,
        title: 'Message',
        path: menuPaths.message,
        icon: <FontAwesomeIcon icon={faMessage} />,
    },
    {
        orderIndex: 4,
        title: 'Friends',
        path: menuPaths.friends,
        icon: <FontAwesomeIcon icon={faUserGroup} />,
    },
];

export { menuPublicConfig, menuPrivateConfig };
