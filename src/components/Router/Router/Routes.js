import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Layout from "../../Layout/Layout";
import Blogs from "../../Shared/Blogs/Blogs";

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
            }
        ]
    }
])

export default router;