import React from "react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES } from "../../utils/constants/messages";
import { Input, Button, Form, Select } from "antd";
import { CustomInput } from "../ui";

const RegisterForm = () => {
  const { handleSession } = useAuth();
  const [form] = Form.useForm();
  const msgError = ERROR_MESSAGES.REQUIRED;

  const [user, setUser] = useState({
    token: "token user secret",
    role: "admin",
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSession(user);

    navigate("/admin");
  };

  // Nuevo

  const onFinish = (values) => {
    console.log("values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="Login"
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

        {/* <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: `${ERROR_MESSAGES.REQUIRED}`,
            },
          ]}
          className="!mb-3"
        >
          <Input placeholder="Ingresa tu email" className="input-field" />
        </Form.Item> */}

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
{/* 
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              id="nombre_user"
              name="nombre_user"
              placeholder="Nombre"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-700"
            >
              Apellidos
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              id="apellido_user"
              name="apellido_user"
              placeholder="Apellidos"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="Telefono"
              className="block text-sm font-medium text-gray-700"
            >
              Teléfono
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              id="telefono_user"
              name="telefono_user"
              placeholder="(+56) 9 12345678"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
          <div>
            <label
              htmlFor="Ciudad"
              className="block text-sm font-medium text-gray-700"
            >
              Ciudad
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              id="ciudad"
              name="ciudad"
              placeholder="Ciudad"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="Comuna"
              className="block text-sm font-medium text-gray-700"
            >
              Comuna
            </label>
            <select
              onChange={handleOnChange}
              type="text"
              id="comuna"
              name="comuna"
              placeholder="Comuna"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            >
              <option selected>Seleccione Comuna</option>
              <option value="STGO">Santiago</option>
              <option value="VLLS">Valparaíso</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="Comuna"
              className="block text-sm font-medium text-gray-700"
            >
              Región
            </label>
            <select
              onChange={handleOnChange}
              type="text"
              id="Region"
              name="region"
              placeholder="Region"
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
            >
              <option selected>Seleccione Región</option>
              <option value="STGO">Región Metropolitana</option>
              <option value="VLLS">Región de Valparaíso</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="direccion"
            className="block text-sm font-medium text-gray-700"
          >
            Dirección
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Calle, avda, Número, Departamento"
            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            id="email"
            name="email"
            placeholder="nombre@ejemplo.com"
            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            onChange={handleOnChange}
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su Password"
            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white p-2 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
          >
            Registrarse
          </button>
        </div>
      </form> */}
    </>
  );
};

export default RegisterForm;
