import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import pageMenuItems from './pageMenuItems';
const { Header, Content, Footer } = Layout;
import { useIsOpen } from '../hooks/Index'
import { LoginModal } from '../components/index';

const PageLayout = () => {
  const location = useLocation();
  const navKey = pageMenuItems.find(item => item.path === location.pathname)?.key || '1';
  const { state, toggle } = useIsOpen()
  console.log('1', state.modalOpen)
  return (
    <>
      <Layout>
        <Header className='justify-between !bg-transparent border-b'>
          <h1 className='text-gray-700 basis-1/3'>logo</h1>

          <div className='flex justify-end items-center'>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={navKey}
              items={pageMenuItems}
              className='!bg-transparent'
            />

            <Button type="primary" onClick={() => toggle('modalOpen')}>
              Iniciar Sesión
            </Button>
          </div>
        </Header>

        <Content style={{ padding: '0 48px' }}>
          <div
            style={{
              minHeight: '90vh',
              padding: 24,
            }}
          >
            <Outlet />
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>

      <LoginModal
        isOpen={state.modalOpen}
        toggle={() => toggle('modalOpen')}
      />
    </>

  );
};

export default PageLayout;