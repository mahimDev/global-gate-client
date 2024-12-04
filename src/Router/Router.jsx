import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import VisasDetails from "../Components/VisasDetails/VisasDetails";
import Layout from "../Layout/Layout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

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
                        path: '/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/register',
                        element: <Register></Register>
                    },
                    {
                        path: '/visaDetails/:id',
                        element: <PrivateRoute>
                            <VisasDetails></VisasDetails>
                        </PrivateRoute>,
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