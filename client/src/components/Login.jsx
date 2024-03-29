import React from 'react';
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
// import login-image from '../assets/login.jpg';
import loginImage from '../assets/login.jpg';

const Login = () => {
    const handleLogin = async (values) => {
        console.log(values)
    }
  return (
      <div>
          <Card className='form-container'>
              <Flex gap='large' align='center'>
                  <Flex flex={0}>
                      <img src={loginImage} className='login-image' />
                  </Flex>
                  <Flex vertical flex={1}>
                      <Typography.Title level={2} strong className='title'>
                          Sign IN
                      </Typography.Title>

                      <Typography.Text type='secondary' strong className='slogan'>
                          Unlock all your tools & lets trade some stocks!
                      </Typography.Text>

                      <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
                          {/* <Form.Item label='Full Name' name='name' rules={[{
                              required: true,
                              message: 'Please Enter your Full Name'
                          }]}>
                              <Input size='large' placeholder='Enter Your Full Name' />
                          </Form.Item> */}

                          <Form.Item label='Email' name='Email' rules={[{
                              required: true,
                              message: 'Please Enter Valid Email'
                          },
                          {
                              type: 'email',
                              message: 'Email is not Valid!'
                          }]}>
                              <Input size='large' placeholder='Enter Your Email' />
                          </Form.Item>

                          <Form.Item label='Password' name='Password' rules={[{
                              required: true,
                              message: 'Enter a strong Password!'
                          }]}>
                              <Input.Password size='large' placeholder='Enter Your Password' />
                          </Form.Item>

                          {/* <Form.Item label='Confirm Password' name='passwordConfirm' rules={[{
                              required: true,
                              message: 'Re-enter the password!'
                          }]}>
                              <Input.Password size='large' placeholder='Enter Your Password' />
                          </Form.Item> */}


                          {/* {error && <Alert description={error} type='error' showIcon closable className='alert'/>} */}
                          <Form.Item>
                              <Button 
                            //   type={`${loading ? '' : 'primary'}`}
                               htmlType='submit' size='large' className='btn'>
                                  Sign In 
                                  {/* {loading ? <Spin/> : 'Create Account'} */}
                              </Button>
                          </Form.Item>

                          <Form.Item>
                              <Link to='/'>
                                  <Button size='large'> Create An Account </Button>
                              </Link>
                          </Form.Item>
                      </Form>
                  </Flex>

                  

              </Flex>
          </Card>
      </div>
  )
}

export default Login
