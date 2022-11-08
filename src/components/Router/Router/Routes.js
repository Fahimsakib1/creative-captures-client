import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import Home from "../../Home/Home/Home";
import Layout from "../../Layout/Layout";
import Login from "../../Login/Login";
import AllServices from "../../Shared/AllServices/AllServices";
import Blogs from "../../Shared/Blogs/Blogs";
import Signup from "../../Signup/Signup";

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
                element: <AddService></AddService>
            }
        ]
    }
])

export default router;