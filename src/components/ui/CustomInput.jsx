import React from 'react'
import { Input, Form } from 'antd';

const CustomInput = ({label, name, rules =[], placeholder, className, inputClassName, type }) => {


    const renderInput = (inputType) => {
        const inputTypes =  {
            text:  <Input placeholder={placeholder} className={`input-field ${inputClassName}`}/>,
            password: <Input.Password placeholder={placeholder} className={`input-field ${inputClassName}`}/>,
        }
    
        return inputTypes[inputType] || inputTypes.text;
    }

    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
            className={`!mb-2 ${className}`}
        >
            {renderInput(type)}
        </Form.Item>
    )
}

export default CustomInput