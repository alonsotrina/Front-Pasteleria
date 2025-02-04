import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import pageMenuItems from './pageMenuItems';
const { Header, Content } = Layout;
import { useIsOpen } from '../hooks/Index'
import { LoginModal, Footer } from '../components/index';
import { ShoppingOutlined, HeartOutlined } from '@ant-design/icons';
import { useAuth } from '../hooks/useAuth';




const PageLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { session } = useAuth()
  const navKey = pageMenuItems.find(item => item.path === location.pathname)?.key || '1';
  const { state, toggle } = useIsOpen()

  const items = [
    {
      key: '1',
      label: `Bienvenido`,
      disabled: true,
    },
    {
      type: 'divider',
    },
    !session?.token && {
      key: '2',
      label: 'Iniciar sesión',
      path: '',
      onClick: () => toggle('modalOpen'),
      extra: ' ',
    },
    !session?.token && {
      key: '3',
      label: 'Registrate',
      path: '/register',
      onClick: () => navigate('/register'),
      extra: '',
    },
    session?.token && {
      key: '4',
      label: 'Mis compras',
      path: '/orders',
      onClick: () => navigate('/register'),
      extra: '',
    },
    session?.token && {
      key: '5',
      label: 'Perfil',
      path: '/profile',
      onClick: () => navigate('/profile'),
      extra: '',
    },
    session?.token && {
      key: '6',
      label: 'Cerrar sesión',
      path: '',
      onClick: () => navigate('/profile'),
      extra: '',
    },
  ];


  return (
    <>
      <Layout>
        <Header className='justify-between !bg-transparent border-b'>
          <h1 className='text-2xl text-gray-700 font-semibold basis-1/3'>La Berlin</h1>

          <div className='flex justify-end items-center'>
            {/* <Menu
              mode="horizontal"
              defaultSelectedKeys={navKey}
              items={pageMenuItems}
              className='!bg-transparent'
            /> */}

            <Link to="/products"
              className='!text-stone-800 text-sm'
            >
              Productos
            </Link>


            <div className="h-5 border-[0.5px] !text-stone-800 mx-4"></div>

            <Link to="/us"
              className='!text-stone-800 text-sm'
            >
              Nosotros
            </Link>

            <div className="h-5 border-[0.5px] !text-stone-800 mx-4"></div>

            {/* <DropdownMenu
              title="Hola, Iniciar Sesión"
              items={items}
            /> */}

            <div className="h-5 border-[0.5px] text-stone-800 mx-4"></div>

            {
              session?.token &&
              <>
                <Link to="/favorite"
                  className='!text-stone-800 text-lg'
                >
                  <HeartOutlined />
                </Link>

                <div className="h-5 border-[0.5px] text-stone-800 mx-4"></div>
              </>
            }

            <Link to="/basket"
              className='!text-stone-800 text-lg'
            >
              <ShoppingOutlined />
            </Link>
          </div>
        </Header>

        <Content className='py-8 w-[95%] mx-auto'>
          <div style={{ minHeight: '90vh'}}>
            <Outlet />
          </div>
        </Content>

        <Footer />
      </Layout>

      <LoginModal
        isOpen={state.modalOpen}
        toggle={() => toggle('modalOpen')}
      />
    </>

  );
};

export default PageLayout;