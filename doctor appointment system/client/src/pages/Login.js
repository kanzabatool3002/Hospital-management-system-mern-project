import React from 'react';
import '../styles/Registerstyles.css';
import { Form, Input, Checkbox, message } from 'antd';
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onfinishHandler = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/login", values);
            window.location.reload();
            dispatch(hideLoading());
            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                message.success('Login Successfully!');
                navigate("/");
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error("Something Went Wrong");
        }
    }
    return (
        <>
            <div className='form-container'>
                <Form layout='vertical' onFinish={onfinishHandler} className='register-form'>
                    <h1 className='text-center'>Login Form</h1>
                    <Form.Item label="Email" name="email">
                        <Input type='email' required />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link to="/register" className='m-4'>Not a User Register here..</Link>
                    <button className='btn btn-primary' type='Submit'>Login</button>
                </Form>
            </div>
        </>
    )
}
export default Login