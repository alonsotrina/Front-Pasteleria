import React from 'react'
import { Modal } from 'antd';

const ModalComponent = ({ title, isOpen, onClose, children }) => {
  return (
    <Modal
      title={title}
      footer={null}
      open={isOpen}
      onCancel={onClose}
    >
      {children}
    </Modal>
  );
};
export default ModalComponent