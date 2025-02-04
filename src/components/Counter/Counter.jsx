import React from 'react'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { CustomButtonAction } from '../ui';

const Counter = ({ counter, setCounter }) => {

    const increase = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const discount = () => {
        setCounter(prevCounter => prevCounter - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <CustomButtonAction
                color="default"
                onClick={discount}
                shape="circle"
                size='large'
                variant='link'
                icon={<MinusOutlined className="!text-[18px] !text-slate-600" />}
                disabled={counter <= 1}
            />

            <h4 className='text-2xl/15 font-normal text-slate-600 my-4'>{counter}</h4>

            <CustomButtonAction
                color="default"
                onClick={increase}
                shape="circle"
                size='large'
                variant='link'
                icon={<PlusOutlined className="!text-[18px] !text-slate-600" />}
            />
        </div>
    )
}

export default Counter