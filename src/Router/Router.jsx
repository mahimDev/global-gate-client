import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import VisasDetails from "../Components/VisasDetails/VisasDetails";
import Layout from "../Layout/Layout";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AddVisa from "../Pages/AddVisa/AddVisa";
import AllVisas from "../Pages/AllVisas/AllVisas";
import MyAddedVisas from "../Pages/MyAddedVisas/MyAddedVisas";
import MyVisaApplication from "../Pages/MyVisaApplication/MyVisaApplication";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                        path: '/addVisa',
                        element:
                            <PrivateRoute>
                                <AddVisa></AddVisa>
                            </PrivateRoute>
                    },
                    {
                        path: '/allVisas',
                        element: <AllVisas></AllVisas>,
                        loader: () => fetch("https://global-gate-server-fawn.vercel.app/allVisas")
                    },
                    {
                        path: '/myAddedVisas',
                        element:
                            <PrivateRoute>
                                <MyAddedVisas></MyAddedVisas>
                            </PrivateRoute>
                    },
                    {
                        path: '/myVisaApplication',
                        element:
                            <PrivateRoute>
                                <MyVisaApplication></MyVisaApplication>
                            </PrivateRoute>,

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
                        element:
                            <PrivateRoute>
                                <VisasDetails></VisasDetails>
                            </PrivateRoute>,
                        loader: ({ params }) => fetch(`https://global-gate-server-fawn.vercel.app/visa/${params.id}`)
                    }

                ]
            }
        ]

    },
    // {
    //     path: '*',
    //     element: <ErrorPage></ErrorPage>
    // }

])

export default router;