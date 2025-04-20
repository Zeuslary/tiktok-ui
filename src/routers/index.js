import menuPaths from '~/config/routersPath';

import { Home, Explore, Following, Friends, Profile, Upload, Activity, Message } from '~/pages';
import { UploadLayout } from '~/components/Layout';

const publicRouter = [
    {
        path: menuPaths.home,
        component: Home,
    },
    {
        path: menuPaths.explore,
        component: Explore,
    },
    {
        path: menuPaths.following,
        component: Following,
    },
    {
        path: menuPaths.profile,
        component: Profile,
    },
    {
        path: menuPaths.upload,
        component: Upload,
        layout: UploadLayout,
    },
];

const privateRouter = [
    ...publicRouter,
    {
        path: menuPaths.friends,
        component: Friends,
    },
    {
        path: menuPaths.activity,
        component: Activity,
    },
    {
        path: menuPaths.message,
        component: Message,
    },
];

export { publicRouter, privateRouter };
