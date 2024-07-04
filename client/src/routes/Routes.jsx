
import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage/>,
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
                element:<JobDetails></JobDetails>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
                // loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}}`)
            },
            {
                path:'/add-job',
                element:<AddJob/>
            }
        ]
    }
])
export default router;