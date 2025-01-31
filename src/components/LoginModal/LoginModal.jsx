import React from 'react'
import { ModalComponent } from '../ui';
import { Input, Button } from 'antd';

const LoginModal = ({ isOpen, toggle }) => {
  return (
    <ModalComponent 
        title="Iniciar Sesión" 
        isOpen={isOpen} 
        onClose={toggle}
    >
      <Input placeholder="Correo electrónico" className="mb-2" />
      <Input.Password placeholder="Contraseña" className="mb-2" />
      <Button type="primary" block>
        Ingresar
      </Button>
    </ModalComponent>
  )
}

export default LoginModal