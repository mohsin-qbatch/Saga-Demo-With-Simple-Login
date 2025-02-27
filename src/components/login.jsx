import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { requestUserLogin } from '../actions/user'
import './login.less'

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        this.props.requestUserLogin({ username, password });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{width:'500px', alignText:'center'}}>
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
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { requestUserLogin };


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
// export default LoginForm;