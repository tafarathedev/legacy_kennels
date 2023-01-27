import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import UserNavigation from '../component/UserNavigation'
import Product from '../component/SingleProduct'
import axios from '../api/axios'


const Products = () => {
   
    const [products , setProduct] =React.useState([])
 //run api to fetch the 
  React.useEffect(()=>{
       
     axios.get("/products")
     .then(res=>{
        
        if(res.data.product){
   
            setProduct(res.data.product)
        }
        return res.data.product
     })
     .catch(err=>console.log(err))
  },[Products])

 
 
 //header paragraph 
  const para ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, vitae. A aperiam at aliquam reprehenderit nobis fuga repellendus quis culpa?"
  return (
    
    
    <div>
   <UserNavigation />
  
   <section className="bg-gray-900 dark:bg-white">
   <Heading title="Pet Store" para={para}/>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
 

    <div className="mt-8">
      <p className="text-sm text-right text-gray-500">
        Showing <span> 1 </span> of 40
      </p>
    </div>

    <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4 justify-center">
    

{ 
products.map((product)=><Product key={product._id} product={product} />)
}


    </ul>
{/* pagination */}
    <div className="flex mt-6 justify-center text-center">
    <Link to="#" className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
    </Link>

    <Link to="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        1
    </Link>

    <Link to="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        2
    </Link>

    <Link to="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        ...
    </Link>

    <Link to="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        9
    </Link>

    <Link to="#" className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        10
    </Link>

    <Link to="#" className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
    </Link>
</div>
  </div>
</section>

<footer className="bg-white dark:bg-gray-900">
     <Footer />
 </footer>
  </div>
  
  )
}

export default Products