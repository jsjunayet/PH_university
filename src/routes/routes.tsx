import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminpaths} from "./admin.router";
import { routerGenerator } from "../utils/routerGenerator";
import { Studentpaths } from "./student.route";
import Login from '../pages/About';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
    },
    {
        path:"/admin",
        element: <App/>,
        children: routerGenerator(adminpaths)
    },
    {
        path:"/faculty",
        element: <App/>,
        children:routerGenerator(adminpaths)
    },
    {
        path:"/student",
        element: <App/>,
        children:routerGenerator(Studentpaths)
    },
    {
        path:"/login",
        element: <Login/>,
    },
])
export default router