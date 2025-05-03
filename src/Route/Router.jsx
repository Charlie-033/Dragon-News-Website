import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import About from "../Pages/About";
import Carrer from "../Pages/Carrer";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import News from "../Pages/News";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/category/:id',
                loader: () => fetch("/news.json"),
                hydrateFallbackElement: <span className="loading loading-spinner loading-xl"></span>,
                Component: CategoryNews
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/carrer',
                Component: Carrer
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
        ]
    },
    {
        path: '/news-details/:id',
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <span className="loading loading-spinner loading-xl"></span>,
        element: <PrivateRoute>
            <News/>
        </PrivateRoute>
    },
    {
        path: '/*',
        element: <h2>404 - Not Found</h2>
    }
])