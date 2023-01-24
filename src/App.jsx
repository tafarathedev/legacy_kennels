import React , {useState , useEffect } from 'react'
import Contact_Us from "./component/Contact_Us"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import SampleDogs from "./component/SampleDogs"
import Services from "./component/Services"
import About_us from "./component/About_us"
import SampleTestimonials from "./component/SampleTestimonials"
import PuffLoader  from "react-spinners/PuffLoader";
import UserNavigation from './component/UserNavigation'
/* auth comps and functions */
import AuthService from './services/Auth.service'

function App() {
 

   return( 
 <>
    <UserNavigation />
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

export default App
