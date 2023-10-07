import PhotoArea from '../Components/PhotoArea';
import ServiceCard from '../Components/ServiceCard';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ServicePage from '../Pages/ServicePage';
import PrivateRoute from '../Providers/PrivateRoute';
import Root from './../Layout/Root';
import { createBrowserRouter, } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/service',
                element: <PrivateRoute><ServicePage></ServicePage></PrivateRoute>,
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceCard></ServiceCard></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/photo',
                element: <PrivateRoute><PhotoArea></PhotoArea></PrivateRoute>
            },
        ]
    },
]);

export default router