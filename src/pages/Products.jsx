import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import UserNavigation from '../component/UserNavigation'
import Product from '../component/SingleProduct'
import axios from '../api/axios'
import {useSearchParams} from 'react-router-dom'
import Pagination from '../component/Pagination'
import { current } from 'daisyui/src/colors'



const Products = () => {
   
    const [products , setProduct] =React.useState([])
   const [currentPage, setCurrentPage ] = React.useState(1)
   const [productPerPage ] = React.useState(8)
   
  
   
 //run api to fetch the 
 
  React.useEffect(()=>{
   
       // GET /tasks?limit=10&skip=20
     axios.get(`/products?` ,{mode:"cors"})
     .then(res=>{
        
        if(res.data.product){
            setProduct(res.data.product)
        }
        return res.data.product
     })
     .catch(err=>console.log(err))
  },[])

  //get indexOf last page
  const IndexOfLastPage = currentPage * productPerPage
  const IndexOfFirstPage = IndexOfLastPage - productPerPage
  const currentProduct = products.slice(IndexOfFirstPage,IndexOfLastPage)
 

  //paginate 
function paginateForward(){
  /*   console.log(currentPage) */
    setCurrentPage(prevState=>prevState + 1)
}
function paginateBackward(){
 /*    console.log(currentPage) */
    setCurrentPage(prevState=>prevState - 1)
}



 
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
        Page <span> {currentPage} </span> / {products.length}
      </p>
    </div>

    <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4 justify-center">
    
   
       <Product products={currentProduct} />


    </ul>
{/* pagination */}
   <Pagination 
    paginateForward={paginateForward}
     paginateBackward={paginateBackward} 
     currentPage={currentPage}
      />
  </div>
</section>

<footer className="bg-white dark:bg-gray-900">
     <Footer />
 </footer>
  </div>
  
  )
}

export default Products