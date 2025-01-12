
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { createElement } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const items: MenuProps["items"] = [
  {
    key:"1",
    label:"dashboard"
  },
  {
    key:"2",
    label:"profile"
  },
  {
    key:"3",
    label:"more",
    children:[
      {
        key:"4",
        label:"dashboard"
      },
      {
        key:"5",
        label:"profile"
      },
    ]
  }
]
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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
              This is PH university
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