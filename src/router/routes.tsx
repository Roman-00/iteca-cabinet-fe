import IndexPage from '@/pages/index';
import LoginPage from '@/pages/login';

/**
 * Массив с роутами.
 */
export const routes = [
    {
        path:        '/',
        label:       'Index',
        element:     <IndexPage />,
        isProtected: true
    },
    {
        path:        '/login',
        label:       'Login',
        element:     <LoginPage />,
        isProtected: false
    }
];
