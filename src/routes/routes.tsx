import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            }
        ]
    }
])
export default router