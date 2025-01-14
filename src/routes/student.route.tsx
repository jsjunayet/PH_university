import AdminDashboard from "../pages/admin/AdminDashboard";
import OfferCourse from "../pages/student/OfferCourse";
import Registration from "../pages/student/Registration";

export const Studentpaths = [
    {
        name:"Dashbaord",
        path:"dashbaord",
        element:<AdminDashboard/>
    },{
        name:"Student Management",
        children:[
            {
                name:"Offer Course",
                path:"offer-course",
                element:<OfferCourse/>
            },
            {
                name:"Registration",
                path:"registration",
                element:<Registration/>
            }
        ]
    }
]