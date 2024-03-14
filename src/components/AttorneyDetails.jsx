import React from 'react'
import { Form } from 'antd';
import FormFooter from './FormFooter';

export default function AttorneyDetails({ moveToNextStep, moveToPrevStep }) {

    const [form] = Form.useForm();

    const handleSubmit = () => {
        // api
        moveToNextStep();
    }

    const handleBackClick = () => {
        moveToPrevStep();
    }

    return (
        <div>
            AttorneyDetails
            <FormFooter form={form} handleSubmit={handleSubmit} handleBackClick={handleBackClick} />
        </div>
    )
}
