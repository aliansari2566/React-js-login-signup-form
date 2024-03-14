import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import { Link } from 'react-router-dom'; 
import { OtpVerification } from './OtpVerification';
import  OtpResend from '../pages/OtpResend';

export const Login = () => {
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const [showOtpResend, setShowOtpResend] = useState(false);


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const handleVerifyOtpClick = () => {
    setShowOtpVerification(true);
    setShowOtpResend(false); // Hide the resend OTP form if shown
  };

  const handleOtpResendClick = () => {
    setShowOtpResend(true);
    setShowOtpVerification(false); // Hide the OTP verification form if shown
  };

  return (
    <Row justify="center" >
      <Col className='loginleft'  xs={22} sm={18} md={12} lg={8} xl={13}>
        <div className='content'>


        </div>
        {/* Left side with red background */}
      </Col>

      <Col className='loginright' xs={22} sm={18} md={12} lg={8} xl={11}>
        {/* Centered form */}
       
        {!showOtpVerification && !showOtpResend && (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h2>Let’s Get Started</h2>
          <h4>Enter your credentials below to access your account or create a new one to get started</h4>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or<Link to="/signup">register now!</Link>
          </Form.Item>


          <Form.Item>
            <Button type="primary"  className="login-form-button"  onClick={handleVerifyOtpClick}>
             verify otp
            </Button>
            <Button type="primary"  className="login-form-button" onClick={handleOtpResendClick}>
             otp Resend
            </Button>
            <Button type="primary" className="login-form-button">
            <Link to="/signup">otp Regenerate</Link>
            </Button>
            <Button type="primary"  className="login-form-button">
            <Link to="/verify_otp">Application status</Link>
            </Button>
          </Form.Item>

        </Form>
          )}
       {showOtpVerification && <OtpVerification />}
       {showOtpResend && <OtpResend />}

      </Col>
    </Row>
  );
};
