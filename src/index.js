import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import "antd/dist/antd.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-block-ui/style.css';
// import './styles/index.scss';
import App from './App';

axios.defaults.baseURL = 'https://jr-cms.herokuapp.com/v1';

const baseURL = process.env.PUBLIC_URL || '';

ReactDOM.render(
  <Router basename={baseURL}>
    <App />
  </Router>,
  document.getElementById('root'),
);
