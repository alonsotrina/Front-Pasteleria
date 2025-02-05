import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CustomDropdown } from '../ui'
import { ShoppingOutlined, HeartOutlined } from '@ant-design/icons';
import { useAuth } from '../../hooks/useAuth';
import { useBasket } from '../../hooks/useBasket';

const NavBar = ({ className }) => {
    const { openModal, session } = useAuth()
    const { open } = useBasket()
    const navigate = useNavigate();
    const item = [
        {
            key: '1',
            label: `Bienvenido Dolce Vita`,
            disabled: true,
        },
        {
            type: 'divider',
        },
        !session?.token && {
            key: '2',
            label: 'Iniciar sesión',
            path: '',
            onClick: () => openModal('modalOpen'),
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
        <nav className={`justify-between !bg-white w-full ${className}`}>
            <Link to="/"
                className='text-xl !text-gray-700 font-normal basis-1/3'
            >
                DOLCE VITA
            </Link>

            <div className='flex justify-end items-center'>
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

                <CustomDropdown
                    title="Hola, Iniciar Sesión"
                    items={item}
                    className='!text-stone-800 text-sm'
                />

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

                <Link
                    className='!text-stone-800 text-lg'
                >
                    <ShoppingOutlined onClick={() => open('basketOpen')} />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar