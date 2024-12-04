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
                        path: '/addVisa',
                        element: <AddVisa></AddVisa>
                    },
                    {
                        path: '/allVisas',
                        element: <AllVisas></AllVisas>,
                        loader: () => fetch("http://localhost:2000/allVisas")
                    },
                    {
                        path: '/myAddedVisas',
                        element: <MyAddedVisas></MyAddedVisas>,
                        // loader: () => fetch("http://localhost:2000/allVisas")
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
                        loader: ({ params }) => fetch(`http://localhost:2000/visa/${params.id}`)
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