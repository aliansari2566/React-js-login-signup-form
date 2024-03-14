import React from 'react';
import { Button, Form, Input, Space, Select } from 'antd';
import FormFooter from './FormFooter';
import { useNavigate } from 'react-router-dom';


const onFinish = (values) => {
    console.log('Received values of form: ', values);
};

export const BasicDetails = ({ moveToNextStep, moveToPrevStep }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSubmit = () => {
        // api
        moveToNextStep();
    }

    const handleBackClick = () => {
        navigate('/');
    }

    return (
        <Form form={form} layout="vertical" autoComplete="off"

            name="SignUp"
            className="SignUp_form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}

        >

            <Form.Item style={{ marginBottom: 0 }}>


                <Form.Item label="UIN Type"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="UIN Type">
                        <Select.Option value="UIN Type">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="UIN"
                    name="year"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Input placeholder="UIN" />
                </Form.Item>




            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>


                <Form.Item label="Mr. / Mrs."
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="Select">
                        <Select.Option value="select">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Input placeholder="Name" />
                </Form.Item>




            </Form.Item>


            <Form.Item style={{ marginBottom: 0 }}>


                <Form.Item label="Marital Status"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="Select">
                        <Select.Option value="select">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="father/husband"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="Select">
                        <Select.Option value="select">Demo</Select.Option>
                    </Select>
                </Form.Item>

            </Form.Item>

            <Form.Item
                label="father/husband name"
                name="father/husband_name"
                rules={[{ required: true }]}
                style={{ display: 'inline-block', width: 'calc(100% )'}}
            >
                <Input placeholder="Name" />
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>


                <Form.Item label="Marital Status"
                    rules={[{
                        required: true,
                        message: 'Please input your Username!'
                    }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                    <Select placeholder="Select">
                        <Select.Option value="select">Demo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="father/husband"
                    rules={[{ required: true }]}
                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                >
                    <Select placeholder="Select">
                        <Select.Option value="select">Demo</Select.Option>
                    </Select>
                </Form.Item>

            </Form.Item>

            {/* <Form.Item>
                <Space>
                    <SubmitButton className="SignUp-submit-button" form={form} onClick={handleSubmit}>Submit</SubmitButton >
                    <Button onClick={handleBackClick} className="SignUp-back-button">Back</Button>
                </Space>
            </Form.Item> */}
            <FormFooter form={form} handleSubmit={handleSubmit} handleBackClick={handleBackClick} />
        </Form>
    );
};
