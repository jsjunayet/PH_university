
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { createElement } from 'react';
import { Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/admin.router';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    return (
        <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
         <div style={{color:"white"}}>
          <h1>PH university</h1>
         </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
               
              }}
            >
              <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
};

export default MainLayout;