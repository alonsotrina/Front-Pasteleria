import React from 'react';
import { ModalComponent } from '../ui';
import { Input, Button, Form } from 'antd';
import { ERROR_MESSAGES } from '../../utils/constants/messages';
const LoginModal = ({ isOpen, toggle }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

   // Limpiar el formulario al cerrar el modal
   const handleClose = () => {
    form.resetFields(); 
    toggle(); 
  };

  return (
    <ModalComponent
      title=""
      isOpen={isOpen}
      onClose={handleClose}
      className="text-2xl"
    >
      <h3 className='text-xl font-semibold text-stone-800 mt-5 mb-2'>Inicia sesión para comprar</h3>
      <h3 className='text-[16px] font-light text-stone-800 mb-5'>Por favor, ingresa tu correo y contraseña para continuar.</h3>

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
      >
        <Form.Item
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
          <Input 
            placeholder="Ingresa tu email" 
            className='input-field'
          />
        </Form.Item>


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
        >
          <Input.Password 
            placeholder="Ingresa tu contraseña"
            className='input-field'
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            size="large"
            type="primary" 
            htmlType="submit" 
            block
            className='mt-2 !rounded-[14px]'
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>


      <div className="justify-center my-[24px]">
        <h4 className='text-sm font-light text-stone-800'>¿No tienes cuenta?</h4>
        <Button
          type="link"
          variant="outlined"
          href="/register"
          onClick={handleClose}
        >
          Regístrate aquí.
        </Button>
      </div>
    </ModalComponent>
  )
}

export default LoginModal