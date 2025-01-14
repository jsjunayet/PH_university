
import { sidebarGenerator } from '../../utils/sidebarGenerator';
import { adminpaths } from '../../routes/admin.router';
import { Studentpaths } from '../../routes/student.route';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;


const Sidebar = () => {
    const user={
        ADMIN:"Admin",
        FACULTY:"Faculty",
        STUDENT:"Student"
      }
      const sidebarType = user.STUDENT
      let sidebar;
      switch(sidebarType){
        case user.ADMIN :
          sidebar = sidebarGenerator(adminpaths, user.ADMIN)
          break;
          case user.STUDENT :
            sidebar = sidebarGenerator(Studentpaths, user.STUDENT)
            break;
      }
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
       <div style={{color:"white"}}>
        <h1>PH university</h1>
       </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebar} />
      </Sider>
    );
};

export default Sidebar;