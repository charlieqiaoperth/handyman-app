
import { Form, Icon, Input, Button, Checkbox ,Row, Col} from 'antd';
import React, { Component } from 'react';
import UserLayout from '../Ui/user';
import {login} from '../../api/auth';

class NormalLoginForm extends React.Component {
    state={
        isFetching: true,
    }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {        
        login(values).then(auth => {
          this.setState({ isFetching: false });
          this.props.history.push('/');
        });
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <UserLayout>
    <Row >
        <Col span={8} offset={8}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        
        <Form.Item>
         <Row gutter={6} span={24} justify={"space-around"}>
            <Col span={24}>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
          </Col>
          <Col span={12}>
          <a className="login-form-forgot" href="">
          <span>Forgot password</span>
          </a>
          </Col >
          <Col span={12}>
          Or <a href=""><span>register now!</span></a>
          </Col>
          </Row>        
        </Form.Item>
        
      </Form>
      </Col>
    </Row>
    </UserLayout>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginForm;
          