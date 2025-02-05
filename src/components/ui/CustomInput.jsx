import React from 'react'
import { Input, Form } from 'antd';

const CustomInput = ({label, name, rules =[], placeholder, className, inputClassName }) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
            className={`!mb-0 ${className}`}
        >
            <Input
                placeholder={placeholder}
                className={`input-field ${inputClassName}`}
            />
        </Form.Item>
    )
}

export default CustomInput