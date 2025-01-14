import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudents from "../pages/admin/CreateStudents";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};


 export const adminpaths = [
    {
        name:"Dashbaord",
        path:"dashbaord",
        element:<AdminDashboard/>
    },{
        name:"User Management",
        children:[
            {
                name:"Create Admin",
                path:"create-admin",
                element:<CreateAdmin/>
            },
            {
                name:"Create Faculty",
                path:"create-faculty",
                element:<CreateFaculty/>
            },
            {
                name:"Dashbaord",
                path:"dashbaord",
                element:<AdminDashboard/>
            },
             {
                name:"Create Student",
                path:"create-student",
                element:<CreateStudents/>
            },
             {
                name:"Create Studentd",
                path:"create-studentf",
                element:<CreateStudents/>
            },
        ]
    }
]
// export const adminSidebarItems =adminpaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );


// export const adminRoutes: TRoute[] = [];

// for (const item of adminpaths) {
//   if (item.path && item.element) {
//     adminRoutes.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     for (const child of item.children) {
//       adminRoutes.push({
//         path: child.path,
//         element: child.element,
//       });
//     }
//   }
// }

// export const adminRoutes = adminpaths.reduce((acc:TRoute[], item) => {
//     if (item.path && item.element) {
//       acc.push({
//         path: item.path,
//         element: item.element,
//       });
//     }
  
//     if (item.children) {
//       item.children.forEach((child) => {
//         acc.push({
//           path: child.path,
//           element: child.element,
//         });
//       });
//     }
  
//     return acc;
//   }, []);
//   console.log(adminRoutes, "hello world");

  