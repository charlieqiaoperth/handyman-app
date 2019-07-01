import React, { Component } from 'react';
// import {Form} from 'antd';
import userLoginLayout from './components/Ui/user';
// import 'antd/dist/antd.css';
import loginForm from './components/Admin/Login';
// import Routes from './components/App/Routes';
// import TopNav from './components/App/TopNav';
// import { loggedIn } from './api/auth';

class App extends Component {
  render() {
    return (
      <div>        
      <userLoginLayout/> 
        {/* <loginForm/>
      </userLoginLayout>
          */}
      </div>
    );
  }
}

export default App;