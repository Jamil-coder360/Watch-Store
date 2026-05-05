// ProductCard.jsx
import React from 'react'
import { useDispatch } from 'react-redux'
import Button from './section/Button'
import { addToCart } from '../features/cart/cartSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className='w-full lg:w-[280px] flex flex-col p-4 border border-red-400 rounded transform hover:-translate-y-1.5 duration-300'>
      <div>
        <img src={product.image} alt={product.name} className='rounded-xl w-full' />
      </div>
      <h3 className='text-xl text-black dark:text-white font-bold capitalize py-3'>
        {product.name}
      </h3>
      <span className='text-2xl font-bold text-red-500 pb-2'>
        ৳{product.price.toLocaleString()}
      </span>
      <Button onClick={handleAddToCart}>Add To Cart</Button>
    </div>
  )
}

export default ProductCard