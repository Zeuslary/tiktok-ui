import {
    faHouse,
    faUserGroup,
    faUserPlus,
    faSquarePlus,
    faCompass,
    faMessage,
    faBell,
    faEllipsis,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import menuPaths from './routersPath';
import { trendsData } from '~/services';
import TrendItem from '~/components/TrendItem';

import styles from '~/components/Layout/component/Sidebar/Sidebar.module.scss';

const contentPopperSearch = () => (
    <div className={styles['search-popper-result']}>
        <p className={styles['search-popper-suggest']}>You may like</p>
        <ul className={styles['search-popper-list']}>
            {trendsData.map((trend) => (
                <TrendItem key={trend.id} trend={trend} />
            ))}
        </ul>
    </div>
);

const partStickySearch = () => (
    <input className={styles['search-popper-input']} type="text" placeholder="Search..." />
);

const SearchComponent = (
    <div className={styles['search']}>
        <button className={styles['search-btn']}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input type="text" placeholder="Search" />
    </div>
);

const menuPublicConfig = [
    {
        orderIndex: 0,
        title: SearchComponent,
        path: null,
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
        children: {
            title: 'Search',
            data: true,
        },
        sticky: partStickySearch,
        contentPopper: contentPopperSearch,
    },
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
                            {
                                orderIndex: 9,
                                title: 'Français',
                                code: 'fr',
                            },
                            {
                                orderIndex: 10,
                                title: 'Español',
                                code: 'es',
                            },
                            {
                                orderIndex: 11,
                                title: 'Deutsch',
                                code: 'de',
                            },
                            {
                                orderIndex: 12,
                                title: 'Italiano',
                                code: 'it',
                            },
                            {
                                orderIndex: 13,
                                title: 'Português',
                                code: 'pt',
                            },
                            {
                                orderIndex: 14,
                                title: 'Polski',
                                code: 'pl',
                            },
                            {
                                orderIndex: 15,
                                title: 'Türkçe',
                                code: 'tr',
                            },
                            {
                                orderIndex: 16,
                                title: 'Ελληνικά',
                                code: 'gr',
                            },
                            {
                                orderIndex: 17,
                                title: 'Русский',
                                code: 'ru',
                            },
                            {
                                orderIndex: 18,
                                title: 'Українська',
                                code: 'ua',
                            },
                            {
                                orderIndex: 19,
                                title: 'Magyar',
                                code: 'hu',
                            },
                            {
                                orderIndex: 20,
                                title: 'Română',
                                code: 'ro',
                            },
                            {
                                orderIndex: 21,
                                title: 'Čeština',
                                code: 'cz',
                            },
                            {
                                orderIndex: 22,
                                title: 'Slovenčina',
                                code: 'sk',
                            },
                            {
                                orderIndex: 23,
                                title: 'Hrvatski',
                                code: 'hr',
                            },
                            {
                                orderIndex: 24,
                                title: 'Slovenščina',
                                code: 'si',
                            },
                            {
                                orderIndex: 25,
                                title: 'עברית',
                                code: 'he',
                            },
                            {
                                orderIndex: 26,
                                title: 'العربية',
                                code: 'ar',
                            },
                            {
                                orderIndex: 27,
                                title: 'ภาษาไทย',
                                code: 'th',
                            },
                            {
                                orderIndex: 28,
                                title: '한국어',
                                code: 'kr',
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

        children: {
            title: 'Notify',
            data: true,
        },
    },
    {
        orderIndex: 7,
        title: 'Message',
        path: menuPaths.message,
        icon: <FontAwesomeIcon icon={faMessage} />,
        children: {
            title: 'Message',
            data: true,
        },
    },
    {
        orderIndex: 4,
        title: 'Friends',
        path: menuPaths.friends,
        icon: <FontAwesomeIcon icon={faUserGroup} />,
    },
];

export { menuPublicConfig, menuPrivateConfig };
