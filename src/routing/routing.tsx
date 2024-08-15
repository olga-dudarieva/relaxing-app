import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
import React from "react";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Movie from "../pages/Movie";
import Music from "../pages/Music";

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
                path: "/movie",
                errorElement: <ErrorPage />,
                element: <Movie/>,
                index: true
            },
            {
                path: "/music",
                element: <Music/>,
                index: true
            },

        ]
    },
]);

export default router