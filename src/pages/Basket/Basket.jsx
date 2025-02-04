import React from 'react'

const Basket = () => {
  
  return (
    <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
         <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carro de Compras</h2>
                <div class="ml-3 flex h-7 items-center">
                  <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <li class="flex py-6">
                      <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="https://deliciasdeiquique.cl/wp-content/uploads/2022/09/Diseno-sin-titulo-2022-09-29T161129.912-1.png" alt="Torta Oreo de chocolate con crema." class="size-full object-cover"/>
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">Torta Oreo</a>
                            </h3>
                            <p class="ml-4">$25.000</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">Bizcocho de chocolate, crema con galleta oreo y ganache de chocolate</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Cantidad: 1</p>

                          <div class="flex">
                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Eliminar</button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="flex py-6">
                      <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="https://www.tradicionpompadour.cl/wp-content/uploads/2020/09/IMG_46411-scaled.jpg" alt="Torta Crema Moka" class="size-full object-cover"/>
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">Torta Crema Moka</a>
                            </h3>
                            <p class="ml-4">$32.000</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">Bizcochos de vainilla, rellena con crema moka y Frambuesas</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Cantidad 1</p>

                          <div class="flex">
                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Eliminar</button>
                          </div>
                        </div>
                      </div>
                    </li>

                    </ul>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$57.000</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">el despacho y los impuestos se calculan en el pago</p>
              <div class="mt-6">
                <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">Pedido</a>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  o
                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Continuar comprando
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Basket;