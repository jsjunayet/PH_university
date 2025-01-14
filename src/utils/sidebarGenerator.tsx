
import { NavLink } from "react-router-dom";
import { TSidebarItem, TuserPath } from "../components/ts/types/ts.tpes";


export const sidebarGenerator = (items:TuserPath[], role:string)=>{
const SidebarItems: TSidebarItem[] = [];

for (const item of items) {
  if (item.path && item.name) {
    SidebarItems.push({
      key: item.name,
      label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    const childrenItems = item.children.map((child) => ({
      key: child.name,
      label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
    }));
    SidebarItems.push({
      key: item.name,
      label: item.name,
      children: childrenItems,
    });
  }
}
return SidebarItems
}
// export const sidebarGenerator = (items:TuserPath[], role)=>{
//  const SidebarItems = items.reduce(
//         (acc: TSidebarItem[], item) => {
//           if (item.path && item.name) {
//             acc.push({
//               key: item.name,
//               label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
//             });
//           }
      
//           if (item.children) {
//             acc.push({
//               key: item.name,
//               label: item.name,
//               children: item.children.map((child) => ({
//                 key: child.name,
//                 label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
//               })),
//             });
//           }
      
//           return acc;
//         },
//         []
//       );
// return SidebarItems
// }
