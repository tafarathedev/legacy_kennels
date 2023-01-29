import React from 'react'
import axios from '../api/axios.js'
import Heading from './Heading'
import {Link , useSearchParams} from 'react-router-dom'
import SingleDog from './SingleDog.jsx'

const SampleDogs = () => {
  const [dogs , setDogs] = React.useState([])
  const [currentPage, setCurrentPage ] = React.useState(1)
  const [dogPerPage ] = React.useState(4)

  
  React.useEffect(()=>{
    // GET /tasks?limit=10&skip=20
  axios.get('/dogs/' ,{mode:"cors"})
  .then(res=>{
     
     if(res.data.dog){
         console.log(res.data.dog)
       
         
         setDogs(res.data.dog)
     }
     return res.data
  })
  .catch(err=>console.log(err))
},[])



  //get indexOf last page
  const IndexOfLastPage = currentPage * 4
  const IndexOfFirstPage = IndexOfLastPage - 4
  const currentDog = dogs.slice(IndexOfFirstPage,IndexOfLastPage)
 
  const para="In our breeding program we have males with brown coats, and females with brindle, fawn and black coats. This provides our clients with a variety of puppy coats to suit their hearts desire."
  return (
    <div>
<section>
<Heading title="Breeding Dogs" para={para}/>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">


    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
 
    <SingleDog dogs={currentDog} />
        
</ul>
  </div>
</section>


<div className="mt-1 text-center">
        <Link
          to="/products"
          className="mt-6 inline-flex items-center rounded border border-gray-600 bg-gray-800 px-8 py-3 text-white hover:bg-gray-900 hover:text-gray-200 focus:outline-none focus:ring active:text-indigo-900"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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