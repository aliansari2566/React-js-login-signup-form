import React from 'react'
import { Button, Form, Space } from 'antd';
import { SubmitButton } from './SubmitButton';

export default function FormFooter({form, handleBackClick, handleSubmit}) {
    return (
        <>
            <Form.Item>
                <Space>
                    <SubmitButton className="SignUp-submit-button" form={form} onClick={handleSubmit}>Submit</SubmitButton >
                    <Button onClick={handleBackClick} className="SignUp-back-button">Back</Button>
                </Space>
            </Form.Item>
        </>
    )
}
