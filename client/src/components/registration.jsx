import React from 'react';
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
// import { Form } from 'react-router-dom';
import register from '../assets/register.jpg';
import useSignup from '../hooks/useSignup.jsx';

const Registration = () => {

    const { loading, error, registerUser } = useSignup();

    const handleRegistration = (values) => {
        // console.log(values)
        registerUser(values);
    }
    return (
        <div>
            <Card className='form-container'>
                <Flex gap='large' align='center'>
                    <Flex vertical flex={1}>
                        <Typography.Title level={2} strong className='title'>
                            Create An Account
                        </Typography.Title>

                        <Typography.Text type='secondary' strong className='slogan'>
                            Join  the community of Traders and start your journey today!
                        </Typography.Text>

                        <Form layout='vertical' onFinish={handleRegistration} autoComplete='off'>
                            <Form.Item label='Full Name' name='name' rules={[{
                                required: true,
                                message: 'Please Enter your Full Name'
                            }]}>
                                <Input size='large' placeholder='Enter Your Full Name' />
                            </Form.Item>

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

                            <Form.Item label='Confirm Password' name='passwordConfirm' rules={[{
                                required: true,
                                message: 'Re-enter the password!'
                                }]}>
                                <Input.Password size='large' placeholder='Enter Your Password' />
                            </Form.Item>


                                {error && <Alert description={error} type='error' showIcon closable className='alert'/>}
                            <Form.Item>
                                <Button 
                                type={`${loading ? '' : 'primary'}`}
                                 htmlType='submit' size='large' className='btn'>
                                    Create Account
                                    {loading ? <Spin/> : 'Create Account'}
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <Link to='/login'>
                                <Button size='large'>Sign IN </Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Flex>

                    <Flex flex={0}> 
                        <img src={register} className='reg-image'/>
                    </Flex>

                </Flex>
            </Card>
        </div>
    )
}

export default Registration;
