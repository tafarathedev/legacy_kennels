import React from 'react'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import Navigation from '../component/Navigation'
import SingleDog from '../component/SingleDog'
import PuffLoader  from "react-spinners/PuffLoader";
const Dogs = () => {
  let [loading , setLoading] = React.useState(false)

  React.useEffect(()=>{
         setLoading(true)
      setTimeout(()=>{
         setLoading(false)
        },2000)
      },[])
  const para="Our dog store provides you the chance to see the puppies available and from which adult dogs sired them. Feel free to search for your future puppy."
  return (
    <> 
     <Navigation/>
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
    <div>
     
      <Heading title="Dog Store" para={para}/>
   {/*  <!-- ✅ Grid Section - Starts Here 👇 --> */}
    <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    
      <SingleDog/>
      <SingleDog/>
      <SingleDog/>

 {/*  <!--   🛑 Product card - Ends Here  --> */}
{/*  <!--   🛑 Product card - Ends Here  --> */}
    
    </section>
      {/*  <!-- ✅ Grid Section - ends Here 👇 --> */}
</div>
 )}
 <Footer />
</>
  )
}

export default Dogs