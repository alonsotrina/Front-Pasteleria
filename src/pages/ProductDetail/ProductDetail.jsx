import React, { useState } from 'react'
import { Counter, CustomButtom } from '../../components'
import { ShoppingOutlined } from '@ant-design/icons';
import { formatter } from "../../utils/formatters";
import { products } from "../../utils/constants/products";
import { Select } from 'antd';

const ProductInfo = ({ label, value, condition }) => {
  const textColor = condition === 'Sí' ? 'text-slate-800' : 'text-gray-300';

  return (
    <div className='justify-center flex-col'>
      <h3 className={`text-base ${textColor}`}>{label}</h3>
      <h4 className={`text-2xl font-light ${textColor}`}>{value}</h4>
    </div>
  );
};

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState(products[9])
  const [counter, setCounter] = useState(1);

  const porcionesArray = productDetail.porciones.map(porcion => ({
    value: porcion,
    label: `${porcion}`
  }));

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <header className="grid grid-cols-9 gap-4">
        <div className="relative col-span-6 bg-white rounded-4xl p-12 px-6">
          <h2 className='text-base text-slate-600 mb-2'>{productDetail.category} - sku:00{productDetail.id}</h2>
          <h3 className='text-5xl font-light text-slate-800'>{productDetail.name}</h3>
          <h3 className="text-4xl font-light text-slate-600 my-4">$ {formatter.format(productDetail.price)}</h3>

          <div className='grid grid-cols-3 my-9'>
            <ProductInfo
              label="Azúcar"
              value={productDetail.azucar}
              condition={productDetail.azucar}
            />

            <ProductInfo
              label="Gluten"
              value={productDetail.gluten}
              condition={productDetail.gluten}
            />

            <ProductInfo
              label="Lactosa"
              value={productDetail.lactosa}
              condition={productDetail.lactosa}
            />
          </div>

          <p className='text-base/7 font-light pt-8'>{productDetail.descripcion}</p>

          <div className='grid grid-cols-2 mt-9'>
            <div className='justify-center flex-col'>
              <label htmlFor="porciones" className="block text-base font-medium text-gray-700 mb-2">
                Porción
              </label>

              <Select
                id="porciones"
                onChange={handleChange}
                placeholder="Seleccionar"
                className="!input-field w-40"
                size="large"
                options={porcionesArray}
              />
            </div>

            <div className='justify-center flex-col !border-l-[0.5px]'>
              <Counter
                counter={counter}
                setCounter={setCounter}
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 gap-2">
          <div className='relative rounded-2xl'>
            <img
              alt="example"
              src={productDetail.src}
              className='w-full h-[55vh] object-cover object-left rounded-4xl'
            />

            <div className="absolute h-[55vh] inset-0 bg-gradient-to-br from-teal-800/100 via-black/20 to-teal-700/30 rounded-4xl z-2"></div>

            <div className="bg-[#F5F5F5] w-[90px] h-[90px] absolute -right-1 -bottom-1 z-4 justify-center rounded-tl-4xl">
              <CustomButtom
                color="default"
                href=""
                shape="circle"
                size='large'
                icon={<ShoppingOutlined className="!text-[32px]" />}
                className="!p-8"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default ProductDetail
