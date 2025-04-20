const menuPublicPaths = {
    home: '/',
    explore: '/explore',
    following: '/following',
    upload: '/upload',
    profile: '/profile',
};

const menuPrivatePaths = {
    ...menuPublicPaths,
    friends: '/friends',
    activity: '/activity',
    message: '/message',
};

const menuPaths = {
    ...menuPublicPaths,
    ...menuPrivatePaths,
};

export default menuPaths;
