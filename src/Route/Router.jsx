import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import About from "../Pages/About";
import Carrer from "../Pages/Carrer";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                path: '/',
                Component: Home,
                children: []
            },
            {
                path: '/category/:id',
                loader: () => fetch("/news.json"),
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
    }
])