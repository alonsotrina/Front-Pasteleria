import React from 'react';
import MainRoutes from './router/MainRoutes';
import { Basket } from './pages/Index';

const App = () => {
  return (

    <>
      <MainRoutes />
      {/* Componets Drawer Basket */}
      <Basket />
    </>
  )
}

export default App
