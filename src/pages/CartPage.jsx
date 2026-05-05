import React from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../features/cart/cartSlice'

const CartPage = ({ cartOpen, setCartOpen }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const isDrawer = typeof cartOpen !== 'undefined' && typeof setCartOpen === 'function'

  const handleClose = () => {
    if (isDrawer) setCartOpen(false)
  }

  const content = (
    <div className="relative z-[9999] flex h-full flex-col  bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
            Your cart is empty.
          </div>
        ) : (
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200 bg-slate-50">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{product.name}</h3>
                        <p>৳{(product.price * product.quantity).toLocaleString()}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Quantity: {product.quantity}</p>
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                          className="rounded border border-gray-300 bg-white px-2 py-1 text-gray-700 hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-gray-900">{product.quantity}</span>
                        <button
                          type="button"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                          className="rounded border border-gray-300 bg-white px-2 py-1 text-gray-700 hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        <Trash2 className="inline h-4 w-4 mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>৳{subtotal.toLocaleString()}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </button>
        </div>
        {isDrawer && (
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <button
                type="button"
                onClick={handleClose}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  )

  if (isDrawer) {
    return (
      <Dialog open={cartOpen} onClose={handleClose} className="relative  z-[9999]">
        <DialogBackdrop
          transition
          onClick={handleClose}
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0 "
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className=" z-[9999] pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex items-start justify-between px-4 py-6 sm:px-6">
                    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <X aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                  {content}
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl sm:p-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
        </div>
        {content}
      </div>
    </div>
  )
}

export default CartPage