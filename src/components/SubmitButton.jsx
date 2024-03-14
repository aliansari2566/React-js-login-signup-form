import React from 'react';
import { Button, Form, Input, Space, Select } from 'antd';

export const SubmitButton = ({ form, children, onClick }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);
    return (
        <Button type="primary" htmlType="submit" onClick={onClick} disabled={false}>
            {children}
        </Button>
    );
};