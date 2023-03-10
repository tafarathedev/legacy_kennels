import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import UserNavigation from '../component/UserNavigation'
import PuffLoader  from "react-spinners/PuffLoader";
const Cart = () => {
  let [loading , setLoading] = React.useState(false)

  React.useEffect(()=>{
         setLoading(true)
      setTimeout(()=>{
         setLoading(false)
        },2000)
      },[])
  return (
    <> 
    <UserNavigation />
    { 
  loading? (
    <div className=" flex items-center justify-center h-screen">
    <PuffLoader 
    color={"#333"}
    loading={loading}
    
    aria-label="Loading Spinner"
    data-testid="loader"
    size={60}
    />
    </div>
    ):(   

  <>   
      <Heading title="Cart" para="all cart items are saved here ready to be checked out" />
        
        <div className="bg-white py-6 sm:py-8 lg:py-12">
        <br />
  <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div className="mb-6 sm:mb-10 lg:mb-16">
    </div>

    <div className="flex flex-col gap-4 md:gap-6 mb-6 sm:mb-8">
   {/*    <!-- product - start --> */}
      <div className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <Link to="/product_details" className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80" loading="lazy" alt="Photo by Thái An" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </Link>

        <div className="flex flex-col justify-between flex-1 py-4">
          <div>
            <Link to="/product_details" className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Dog Paws</Link>

            <span className="block text-gray-500">Age: S</span>
            <span className="block text-gray-500">Color: White</span>
          </div>

          <div>
            <span className="block text-gray-800 md:text-lg font-bold mb-1">K15.00</span>

            <span className="flex items-center text-gray-500 text-sm gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              In stock
            </span>
          </div>
        </div>

        <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div className="flex flex-col items-start gap-2">
            <div className="w-20 h-12 flex border rounded overflow-hidden">
              <input type="number" value="1" className="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2" />

              <div className="flex flex-col border-l divide-y">
                <button className="w-6 flex border-none bg-transparent justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">+</button>
                <button className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">-</button>
              </div>
            </div>

            <button className="text-yellow-600 hover:text-red-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">Delete</button>
          </div>

          <div className="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span className="block text-gray-800 md:text-lg font-bold">K15.00</span>
          </div>
        </div>
      </div>
    {/*   <!-- product - end -->

      <!-- product - start --> */}
      <div className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <Link to="/product_details" className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80" loading="lazy" alt="Photo by Thái An" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </Link>

        <div className="flex flex-col justify-between flex-1 py-4">
          <div>
            <Link to="#" className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Dog collar</Link>

            <span className="block text-gray-500">Size: M</span>
            <span className="block text-gray-500">Color: Black</span>
          </div>

          <div>
            <span className="block text-gray-800 md:text-lg font-bold mb-1">K65.00</span>

            <span className="flex items-center text-gray-500 text-sm gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              In stock
            </span>
          </div>
        </div>

        <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div className="flex flex-col items-start gap-2">
            <div className="w-20 h-12 flex border rounded overflow-hidden">
              <input type="number" value="1" className="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2" />

              <div className="flex flex-col border-l divide-y">
                <button className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">+</button>
                <button className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">-</button>
              </div>
            </div>

            <button className="text-yellow-600 hover:text-red-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">Delete</button>
          </div>

          <div className="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span className="block text-gray-800 md:text-lg font-bold">K65.00</span>
          </div>
        </div>
      </div>
    {/*   <!-- product - end -->

      <!-- product - start --> */}
      <div className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <Link to="/product_details" className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80" loading="lazy" alt="Photo by Thái An" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </Link>

        <div className="flex flex-col justify-between flex-1 py-4">
          <div>
            <Link to="#" className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">Dog suit</Link>

            <span className="block text-gray-500">Size: S</span>
            <span className="block text-gray-500">Color: Black</span>
          </div>

          <div>
            <span className="block text-gray-800 md:text-lg font-bold mb-1">K499.99</span>

            <span className="flex items-center text-gray-500 text-sm gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>

              In stock
            </span>
          </div>
        </div>

        <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div className="flex flex-col items-start gap-2">
            <div className="w-20 h-12 flex border rounded overflow-hidden">
              <input type="number" value="1" className="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2" />

              <div className="flex flex-col border-l divide-y">
                <button className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">+</button>
                <button className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">-</button>
              </div>
            </div>

            <button className="text-yellow-600 hover:text-red-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">Delete</button>
          </div>

          <div className="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span className="block text-gray-800 md:text-lg font-bold">K49.99</span>
          </div>
        </div>
      </div>
     {/*  <!-- product - end --> */}
    </div>

  {/*   <!-- totals - start --> */}
    <div className="flex flex-col items-end gap-4">
      <div className="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
        <div className="space-y-1">
          <div className="flex justify-between text-gray-500 gap-4">
            <span>Subtotal</span>
            <span>K129.99</span>
          </div>

          <div className="flex justify-between text-gray-500 gap-4">
            <span>Shipping</span>
            <span>K4.99</span>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-start text-gray-800 gap-4">
            <span className="text-lg font-bold">Total</span>

            <span className="flex flex-col items-end">
              <span className="text-lg font-bold">K134.98 ZMW</span>
              <span className="text-gray-500 text-sm">including VAT</span>
            </span>
          </div>
        </div>
      </div>

      <button className="inline-block bg-yellow-600 hover:bg-yellow-500 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Check out</button>
    </div>
   {/*  <!-- totals - end --> */}
  </div>

</div>

</>
  )}
  <Footer />
</>
  )
}

export default Cart