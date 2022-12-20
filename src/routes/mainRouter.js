import Admin from '../container/Admin';
import HomePage from '../container/HomeContainer';
import History from '../pages/History';
import Login from '../pages/Login';

const mainRouter = [
    {
        path: '/',
        children: [
            {
                path: '/',
                Component: HomePage,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/admin',
                Component: Admin,
            },
            {
                path: '/history',
                Component: History,
            }

        ],
    },
];
export default mainRouter;
