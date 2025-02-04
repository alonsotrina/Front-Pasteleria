import React, { useState } from "react";
import { Drawer } from "antd";
import { useBasket } from "../../hooks/useBasket";
import { CustomButtonAction, ProductsInCart } from "../../components";
import { formatter } from "../../utils/formatters";

const Basket = () => {
  const { state, open, cart, dispatch } = useBasket();

  const handleClear = () => {
    dispatch({
      type: "CLEAR_CART"
    });
  }

  return (
    <>
      <Drawer
        title={`Tu bolsa (${cart.totalItem})`}
        onClose={() => open("basketOpen")}
        open={state.basketOpen}
        className="relative"
      >
        <div className="mt-2 mb-[140px]">

          {
            cart.items < 1 ?
              <div className='text-center'>
                <h2 className='text-lg text-dark-900/80 my-3'>Tu carrito esta vacio...</h2>
              </div>
              :
              <>
                <div className="flex justify-end mb-6">
                  <CustomButtonAction
                    color="primary"
                    onClick={handleClear}
                    size="small"
                    variant='link'
                    name='Vaciar bolsa'
                  />
                </div>


                <ProductsInCart />
              </>
          }
        </div>

        <div className="bg-white absolute w-full bottom-0 left-0 border-t border-gray-200 p-4">
          <div className="justify-between">
            <div>
              <h3 className="text-xs text-slate-700">Subtotal</h3>
              <h3 className="text-xl text-slate-700">${formatter.format(cart.total)}</h3>
            </div>

            <CustomButtonAction
              color="default"
              onClick={() => console.log("click")}
              size="large"
              name='Pagar'
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Basket;
