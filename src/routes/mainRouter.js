import Admin from '../container/Admin';
import EditStory from '../container/Admin/EditStory';
import HomePage from '../container/HomeContainer';
import ChangePass from '../pages/ChangePass';
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
                path: '/changePass',
                Component: ChangePass,
            },
            {
                path: '/addStory',
                Component: EditStory,
            }
        ],
    },
];
export default mainRouter;
