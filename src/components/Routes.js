import React from 'react';
import { Switch, Route, Redirect ,Router, HashRouter} from 'react-router-dom';

import OrderManagement from './Orders/Management';
import BasicLayout from './Ui/index';
import UserLayout from './Ui/user';
import setting from './Admin/Setting';
import Home from './Home';
import OrderView from './Orders/OrderView';
// import OrderManagement from './Orders/Management';
import OrderEdit from './Orders/Edit';
import LoginView from './Admin/Login';
// import {loggedIn} from "../api/auth";

export default () => (
    <div>
     
     {/* <Route exact path="/login" component={LoginView} /> */}
     
     <BasicLayout>
     <Route exact path="/" component={Home} />
     <Route exact path="/orders/management" component={OrderManagement} /> 
     <Route exact path="/orders/management/edit/:id" component={OrderEdit} />  
     <Route exact path="/orders/management/:id" component={OrderView} />      
     <Route exact path="/admin/login" component={LoginView} />     
     <Route exact path="/admin/setting" component={setting} />
     </BasicLayout>
     </div>
   

);


// const ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => {
//   return <Route
//     {...rest}
//     render={props =>
//       loggedIn() ? (
//         <ProtectedComponent {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/signin',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// }