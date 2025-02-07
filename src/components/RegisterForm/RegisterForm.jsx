import React, { useEffect, useState } from "react";
import { Button, Form } from "antd";
import { CustomInput, CustomInputSelect } from "../ui";
import { useAuth } from "../../hooks/useAuth";
import { formFields, formLocation } from "../../utils/constants/formFields";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const {session, handleRegister, perfil} = useAuth();
  const [region, setRegion] = useState("");

  useEffect(() => {
    if (session.token) {
      form.setFieldsValue(perfil);
    }
  }, [perfil, form]);

  // limpiar el form cuando el usaurio se registra
  useEffect(() => {
    if (session.msg === "Usuario registrado con exito.") {
      form.resetFields();
    }
  }, [session.msg, form]);
  
  useEffect(() => {
    if (session.token && perfil) {
      setRegion(perfil.region);
    }
  }, [session.token, perfil]);
  
  const handleRegionChange = (value) => {
    setRegion(value);
  };

  // Función submit registro usuario
  const onFinish = async (values) => {
    if(session.token){
      console.log('enviando otra data')
    } else {
      await handleRegister(values);
    }
  };
  
  return (
    <>
      <Form
        name="registerForm"
        form={form}
        layout="vertical"
        initialValues={perfil}
        onFinish={onFinish}
        autoComplete="off"
        size="large"
        className="grid grid-cols-3 gap-2"
      >
        {formFields.slice(0, 3).map((item, index) => (
          <CustomInput
            key={index}
            type={item.type}
            label={item.label}
            name={item.name}
            rules={item.rules}
            placeholder={item.placeholder}
            disabled={item.disabled}
          />
        ))}

        {formLocation.map((item, index) => (
          <CustomInputSelect
            key={index}
            label={item.label}
            name={item.name}
            rules={item.rules}
            placeholder={item.placeholder}
            options={item.options}
            disabled={ session.token ? false : (item.name === "comuna" ? !region : item.disabled) }
            onChange={handleRegionChange}
          />
        ))}

        {formFields.slice(3, 7).map((item, index) => (
          <CustomInput
            key={index}
            type={item.type}
            label={item.label}
            name={item.name}
            rules={item.rules}
            placeholder={item.placeholder}
            disabled={
              item.name === "direccion" 
                ? !region 
                : item.name === "email" 
                  ? !!session.token 
                  : item.disabled
            }
          />
        ))}

        <Form.Item label={null}>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            block
            className="mt-2 !rounded-[14px]"
          >
            {session.token ? 'Editar': 'Ingresar'}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
