import ForgetPwd from '../pages/authentication/ForgetPassword';
import Login from '../pages/authentication/Login';
import Registration from '../pages/authentication/Registration';
import ResetPassword from '../pages/authentication/ResetPassword';

const publicRoutes = [
	{ path: '/', element: <ResetPassword /> },
	{ path: '/login', element: <Login /> },
	{ path: '/forgot-password', element: <ForgetPwd /> },
	{ path: '/registration', element: <Registration /> },
	{ path: '/reset-password', element: <ResetPassword /> },
];

export { publicRoutes };
