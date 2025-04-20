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

import images from '~/assets/images';
import menuPaths from './routersPath';

const menuPublicConfig = [
    {
        orderIndex: 1,
        title: 'For You',
        path: menuPaths.home,
        icon: faHouse,
    },
    {
        orderIndex: 2,
        title: 'Explore',
        path: menuPaths.explore,
        icon: faCompass,
    },
    {
        orderIndex: 3,
        title: 'Following',
        path: menuPaths.following,
        icon: faUserPlus,
    },
    {
        orderIndex: 5,
        title: 'Upload',
        path: menuPaths.upload,
        icon: faSquarePlus,
    },
    {
        orderIndex: 8,
        title: 'Profile',
        path: menuPaths.profile,
        icon: null,
        img: images.zuri,
    },
    {
        orderIndex: 9,
        title: 'More',
        path: null,
        icon: faEllipsis,
    },
];

const menuPrivateConfig = [
    ...menuPublicConfig,
    {
        orderIndex: 6,
        title: 'Activity',
        path: menuPaths.activity,
        icon: faBell,
    },
    {
        orderIndex: 7,
        title: 'Message',
        path: menuPaths.message,
        icon: faMessage,
    },
    {
        orderIndex: 4,
        title: 'Friends',
        path: menuPaths.friends,
        icon: faUserGroup,
    },
];

export { menuPublicConfig, menuPrivateConfig };
