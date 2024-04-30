import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
import React from "react";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/home",
                element: <ErrorPage/>,
                index: true
            },

        ]
    },
]);

export default router