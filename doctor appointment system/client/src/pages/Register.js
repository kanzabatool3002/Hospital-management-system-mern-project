import React from 'react';
import '../styles/Registerstyles.css';
import { Form, Input, Checkbox, message } from 'antd';
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //form handler
    const onfinishHandler = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/register", values);
            dispatch(hideLoading());
            if (res.data.success) {
                message.success('Registration Successfully!');
                navigate("/login");
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
                    <h1 className='text-center'>Register Form</h1>
                    <Form.Item label="Name" name="name">
                        <Input type='text' required />
                    </Form.Item>
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
                    <Link to="/login" className='m-4'>Already User Login here..</Link>
                    <button className='btn btn-primary' type='Submit'>Register</button>
                </Form>
            </div>
        </>
    )
}

export default Register

