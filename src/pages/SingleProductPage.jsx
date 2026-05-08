import React from "react";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import products from "../data";

const SingleProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  if (!product) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    if (!cartItem) {
      dispatch(addToCart(product));
    }
  };

  return (
    <section className="py-8 bg-white md:py-16 lg:py-25 dark:bg-black antialiased">
      <div className="max-w-7xl px-4 mx-auto 2xl:px-0">
        <div className="flex items-center gap-2 justify-start pb-20 ">
          <Link to="/" className="text-slate-900 dark:text-white">
            Home
          </Link>
          <span className="text-slate-900 dark:text-white">/</span>
          <Link to="/product" className="text-slate-900 dark:text-white">
            product
          </Link>
          <span className="text-slate-900 dark:text-white">/</span>

          <span className="text-slate-900 dark:text-white"> {product.name}</span>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.name}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ৳{product.price.toLocaleString()}
              </p>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center py-2.5 px-5 sm:px-6 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </button>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p className="text-base text-gray-500 dark:text-gray-400">
              {product.name} - Premium Quality Watch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;

