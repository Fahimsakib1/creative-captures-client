import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import Layout from "../../Layout/Layout";
import Login from "../../Login/Login";
import MyReviews from "../../MyReviews/MyReviews";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import AllServices from "../../Shared/AllServices/AllServices";
import Blogs from "../../Shared/Blogs/Blogs";
import Signup from "../../Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <Signup></Signup>
            },

            {
                path: '/services',
                element: <AllServices></AllServices>
            },

            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },

            {
                path: '/services/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },

            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            }
        ]
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;