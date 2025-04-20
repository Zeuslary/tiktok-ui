import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Friend from '~/pages/Friend';
import Upload from '~/pages/Upload';
import { UploadLayout } from '~/components/Layout';

const publicRouter = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
];

const privateRouter = [
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/friend',
        component: Friend,
    },
    {
        path: '/upload',
        component: Upload,
        layout: UploadLayout,
    },
];

export { publicRouter, privateRouter };
