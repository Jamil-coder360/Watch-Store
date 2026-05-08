// ProductCard.jsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Button from './section/Button'
import { addToCart } from '../features/cart/cartSlice'

const ProductCard = ({ product }) => {
  const cartItems = useSelector((state)=> state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    const cartItem = cartItems.find((item) => item.id === product.id)

    if (!cartItem) {
      dispatch(addToCart(product))
    }
  };

  const handleImageClick = () => {
    navigate(`/product/${product.id}`)
  };

  return (
    <div className='w-full lg:w-70 flex flex-col p-4 border border-red-400 rounded transform hover:-translate-y-1.5 duration-300'>
      <div className='cursor-pointer' onClick={handleImageClick}>
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