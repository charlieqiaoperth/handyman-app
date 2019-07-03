import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import  Router from './components/Routes';
import userLoginLayout from './components/Ui/user';
import loginForm from './components/Admin/Login';
// import Routes from './components/App/Routes';
// import TopNav from './components/App/TopNav';
// import { loggedIn } from './api/auth';


// import loginForm from '../pages/Admin/Login';
// import Link from 'umi/link';


const { Header, Footer, Sider, Content } = Layout;
// 引入子菜单组件
const SubMenu = Menu.SubMenu; 
class App extends Component {
  render() {
    return (
      // <div>        
      // <userLoginLayout/> 
      //   {/* <loginForm/>
      // </userLoginLayout>
      //     */}
      // </div>
      <div>
      {/* <loginForm/> */}
    {/* <Layout>
      <Sider width={256} style={{ minHeight: '100vh' }}
           breakpoint="md"
           collapsedWidth="0"
           onBreakpoint={broken => {
             console.log(broken);
           }}
           onCollapse={(collapsed, type) => {
             console.log(collapsed, type);
           }}
      >
        <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
          <Link to="/">
            <Icon type="pie-chart" />
            <span>Home</span>
           </Link> 
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="dashboard" /><span>Customers</span></span>}
          >
             <Menu.Item key="2"><Link to="/customers/management">Management</Link></Menu.Item>
             <Menu.Item key="3"><Link to="/customers/analysis">Analysis</Link></Menu.Item>              
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="dashboard" /><span>Businesses</span></span>}
          >
             <Menu.Item key="4"><Link to="/businesses/management">Management</Link></Menu.Item>
             <Menu.Item key="5"><Link to="/businesses/analysis">Analysis</Link></Menu.Item>   
          </SubMenu>
          <SubMenu
            key="sub3"
            title={<span><Icon type="dashboard" /><span>Orders</span></span>}
          >
             <Menu.Item key="6"><Link to="/orders/management">Management</Link></Menu.Item>
             <Menu.Item key="7"><Link to="/orders/analysis">Analysis</Link></Menu.Item>   
          </SubMenu>
          <SubMenu
            key="sub4"
            title={<span><Icon type="dashboard" /><span>Categories</span></span>}
          >
             <Menu.Item key="8"><Link to="/categories/management">Management</Link></Menu.Item>
             <Menu.Item key="9"><Link to="/categories/analysis">Analysis</Link></Menu.Item>   
          </SubMenu>        
          <SubMenu
            key="sub5"
            title={<span><Icon type="dashboard" /><span>Admin User</span></span>}
          >
             <Menu.Item key="10"><Link to="/admin/login">Login</Link></Menu.Item>
             <Menu.Item key="11"><Link to="/admin/setting">Setting</Link></Menu.Item>   
          </SubMenu>   
        </Menu>
      </Sider>
      <Layout >
        <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Handyman CMS by JR</Footer>
      </Layout>
    </Layout> */}
    <Router/>
    </div>
  )
    
  }
}

export default App;