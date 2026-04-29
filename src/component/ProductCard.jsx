import React from 'react'
import wtc from "../assets/watch-1.png"
import Button from './section/Button'
const ProductCard = () => {
  return (
    <div className='w-[300px]  flex flex-col p-4 border border-red-400  rounded '>
        <div className=''>
            <img src={wtc} alt=""  className='rounded-xl w-full'/>
        </div>
        <h3 className='text-xl text-black font-bold capitalize py-3'>
            premium naviforce limmitem addition watch
        </h3>
        <span className='text-2xl font-bold text-red-500 pb-2'>৳1,890</span>

      <Button >
        Add TO Cart
      </Button>
    </div>
  )
}

export default ProductCard