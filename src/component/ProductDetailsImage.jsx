import React from 'react'

const ProductDetailsImage = () => {
  return (
    <>
      <li>
        <a href="#" className="block overflow-hidden group">
        <img
            src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </a>
      </li>
    </>
  )
}

export default ProductDetailsImage