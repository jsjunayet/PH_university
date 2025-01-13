import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./admin.router";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
    },
    {
        path:"/admin",
        element: <App/>,
        children:adminRoutes
    },
    {
        path:"/faculty",
        element: <App/>,
        children:adminRoutes
    },
    {
        path:"/student",
        element: <App/>,
        children:adminRoutes
    },
    {
        path:"/",
        element: <App/>,
    },
])
export default router