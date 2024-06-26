
import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobCard from "../components/JobCard";
import JobDetails from "../pages/JobDetails";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                index:true,
                element:<Home></Home>,
                // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/job/:id',
                element:<JobDetails></JobDetails>
            }
        ]
    }
])
export default router;