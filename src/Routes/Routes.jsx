import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Pages/Root/Root";
import Apps from "../Pages/Apps/Apps";
import Home from '../Pages/Home/Home'
import Installetions from "../Pages/Install/Installetions";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
        {
        index:true,
        path:'/',
        loader: () => fetch("/byHome.json"),
        Component: Home

        },
        {
        path: '/apps',
        Component:Apps
        },
        {
        path:'/installation',
        Component:Installetions

        }
    ],
    },
]);