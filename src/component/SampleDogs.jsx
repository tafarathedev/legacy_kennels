import React from 'react'
import Heading from './Heading'
import {Link} from 'react-router-dom'

const SampleDogs = () => {
  return (
    <div>
<section>
<Heading title="Breeding Dogs" para=" ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at? Distin"/>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">


    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <Link to="#" className="block overflow-hidden group">
        <img
            src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
            <p className="mt-2">
              <span className="tracking-wider text-gray-900">Brandy </span>
            </p>
          </div>
        </Link>
      </li>

      <li>
        <Link to="#" className="block overflow-hidden group">
        <img
            src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
          

            <p className="mt-2">
                <span className="tracking-wider text-gray-900"> Dog Name </span>
            </p>
          </div>
        </Link>
      </li>

      <li>
        <Link to="#" className="block overflow-hidden group">
        <img
            src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
             <p className="mt-2">
            <span className="tracking-wider text-gray-900"> Dog Name </span>
            </p>
          </div>
        </Link>
      </li>

      <li>
        <Link to="/dog" className="block overflow-hidden group">
        <img
            src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative pt-3 bg-white">
           

            <p className="mt-2">
               <span className="tracking-wider text-gray-900  ">Dog Name</span>
            </p>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</section>


<div className="mt-1 text-center">
        <Link
          to="/products"
          className="mt-6 inline-flex items-center rounded border border-yellow-600 bg-yellow-600 px-8 py-3 text-white hover:bg-yellow-500 hover:text-gray-900 focus:outline-none focus:ring active:text-pink-500"
        >
          <span className="text-sm font-medium ">view in Dog Store </span>
  
          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default SampleDogs