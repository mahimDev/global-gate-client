import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import VisasDetails from "../Components/VisasDetails/VisasDetails";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
                children: [
                    {
                        path: '/',
                        element: <Home></Home>,
                    },
                    {
                        path: '/visaDetails/:id',
                        element: <VisasDetails></VisasDetails>,
                        loader: () => fetch('../data.json')
                    }

                ]
            }
        ]

    },
    {
        path: '*',
        element: <div>error</div>
    }

])

export default router;