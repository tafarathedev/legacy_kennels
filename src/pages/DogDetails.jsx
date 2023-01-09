import React from 'react'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import Navigation from '../component/Navigation'
import ProductDetailsImage from '../component/ProductDetailsImage'

const DogDetails = () => {
    const para ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium quaerat porro cum illo aspernatur quibusdam dolore, accusantium cumque! Quo a iure hic, et id quisquam repellat itaque mollitia saepe?"
  return (
    <>
    <Navigation />
    
    
    
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8"> 
    
    <Heading title="Bruno the BoerBull" para={para}/> 
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
  
      <ProductDetailsImage/>
      
    </ul>
    <div>
    <button type="button" className="justify-center items-center mx-auto content-center">Contact Us +260974125846</button>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default DogDetails