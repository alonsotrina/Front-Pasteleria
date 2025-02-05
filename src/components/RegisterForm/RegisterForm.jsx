import React from "react";
import { ERROR_MESSAGES } from "../../utils/constants/messages";
import { Input, Button, Form, Select } from "antd";
import { CustomInput } from "../ui";

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="registerForm"
        form={form}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
        className="grid grid-cols-3 gap-2"
      >
        <CustomInput
          label="Nombre"
          name="nombre"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
          ]}
          placeholder="Ingresa un nombre"
          className="custom-class"
          inputClassName="custom-input-class"
        />

        <CustomInput
          label="Apellidos"
          name="apellidos"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
          ]}
          placeholder="Ingresa tus apellidos"
          className="custom-class"
          inputClassName="custom-input-class"
        />

        <CustomInput
          label="Teléfono"
          name="telefono"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
          ]}
          placeholder="Ingresa tu telefono"
          className="custom-class"
          inputClassName="custom-input-class"
        />

        <Form.Item 
			label="región"
			 className="custom-class"
          	name="region"
			  rules={[
				{
				  required: true,
				  message: `${ERROR_MESSAGES.REQUIRED}`,
				},
			  ]}
		>
          <Select placeholder='Seleciona una opción' className="custom-input-class">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

		<Form.Item 
			label="Comuna"
          	name="comuna"
			 className="custom-class"
			  rules={[
				{
				  required: true,
				  message: `${ERROR_MESSAGES.REQUIRED}`,
				},
			  ]}
		>
          <Select placeholder='Seleciona una opción' className="custom-input-class">
            <Select.Option value="demo">comuna</Select.Option>
          </Select>
        </Form.Item>


		<CustomInput
          label="Dirección"
          name="direccion"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
          ]}
          placeholder="Ingresa tu dirección"
          className="custom-class"
          inputClassName="custom-input-class"
        />

		<CustomInput
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
          ]}
          placeholder="Ingresa tu email"			
        //   className="custom-class"
        //   inputClassName="custom-input-class"
        />

        <Form.Item
          size="large"
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
          ]}
		className="!mb-0"
        >
          <Input.Password
            placeholder="Ingresa tu contraseña"
            className="input-field custom-class"
          />
        </Form.Item>

		<Form.Item
          size="large"
          label="Repetir contaseña"
          name="passwordRepeat"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
          ]}
        >
          <Input.Password
            placeholder="Repite tu contraseña"
            className="input-field"
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            block
            className="mt-2 !rounded-[14px]"
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
