import React , {useState , useEffect } from 'react'
import Contact_Us from "./component/Contact_Us"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Navigation  from "./component/Navigation"
import NewsLetter from "./component/NewsLetter"
import SampleDogs from "./component/SampleDogs"
import Services from "./component/Services"
import About_us from "./component/About_us"
import SampleTestimonials from "./component/SampleTestimonials"
import SyncLoader  from "react-spinners/SyncLoader";



function App() {
  

 let [loading , setLoading] = useState(false)

  useEffect(()=>{
         setLoading(true)
      setTimeout(()=>{
         setLoading(false)
      },3000)
  },[])
  return (
<div className="App justify-center">
      {loading? (
         <div className=" flex items-center justify-center h-screen">
            <SyncLoader 
                  color={"#333"}
                  loading={loading}
                
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  size={30}
            />
         </div>
         ):( 
 <>
      <Navigation />
      <Hero />
      <About_us />
      <Services/>
      <SampleDogs />
      <Contact_Us />
      <SampleTestimonials />
      <Footer />
 </>
        )
      }
</div>
  )
}

export default App
