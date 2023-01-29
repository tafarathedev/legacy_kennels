import React from 'react'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import UserNavigation from '../component/UserNavigation'
import axios from '../api/axios.js'
import SingleDog from '../component/SingleDog'
import Pagination from '../component/Pagination'


const Dogs = () => {

  const [dogs , setDogs] = React.useState([])
  const [currentPage, setCurrentPage ] = React.useState(1)
  const [dogPerPage ] = React.useState(8)

  
  React.useEffect(()=>{
    
    // GET /tasks?limit=10&skip=20
  axios.get('/dogs/',{mode:"cors"})
  .then(res=>{
     
     if(res.data.dog){
         setDogs(res.data.dog)
        
     }
     return res.data
  })
  .catch(err=>console.log(err))
},[Dogs])

  //get indexOf last page
  const IndexOfLastPage = currentPage * dogPerPage
  const IndexOfFirstPage = IndexOfLastPage - dogPerPage
  const currentDog = dogs.slice(IndexOfFirstPage,IndexOfLastPage)
 

  //paginate 
function paginateForward(){
  /*   console.log(currentPage) */
    setCurrentPage(prevState=>prevState + 1)
}
function paginateBackward(){
 /*    console.log(currentPage) */
    setCurrentPage(prevState=>prevState - 1)
}



  const para="Our dog store provides you the chance to see the puppies available and from which adult dogs sired them. Feel free to search for your future puppy."
  return (
  
<>
<UserNavigation />
    <div>
     
      <Heading title="Dog Store" para={para}/>
   {/*  <!-- ✅ Grid Section - Starts Here 👇 --> */}
    <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    
    
            <SingleDog dogs={currentDog} />
        
        
    
    

 {/*  <!--   🛑 Product card - start Here  --> */}



{/*  <!--   🛑 Product card - Ends Here  --> */}
    
    </section>
      {/*  <!-- ✅ Grid Section - ends Here 👇 --> */}
      <Pagination 
    paginateForward={paginateForward}
     paginateBackward={paginateBackward} 
     currentPage={currentPage}
      />
</div>
 
 <Footer />
</>
  )
}

export default Dogs