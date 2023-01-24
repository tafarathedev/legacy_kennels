import React from 'react'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import UserNavigation from '../component/UserNavigation'
import ProductDetailsImage from '../component/ProductDetailsImage'
import PuffLoader  from "react-spinners/PuffLoader";
import ModalImage from "react-modal-image";
const DogDetails = () => {

  const url = [
    {
      id:1,
      site:"https://images.unsplash.com/photo-1673289072037-de784a40c145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      id:2,
      site:"https://images.unsplash.com/photo-1673289072037-de784a40c145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
    }
  ]
  
  let [loading , setLoading] = React.useState(false)

  React.useEffect(()=>{
         setLoading(true)
      setTimeout(()=>{
         setLoading(false)
        },2000)
      },[])
    const para ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium quaerat porro cum illo aspernatur quibusdam dolore, accusantium cumque! Quo a iure hic, et id quisquam repellat itaque mollitia saepe?"
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
   
    
    
    
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8"> 
    
    <Heading title="Bruno the BoerBull" para={para}/> 
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
  
      <ProductDetailsImage/>
      <ProductDetailsImage/>
      <ProductDetailsImage/>
      <ProductDetailsImage/>
     
      
    </ul>
    
   
    </div>
    <div className="flex justify-center items-center  mx-6 pt-6">
    <button type="button" className="bg-yellow-600 text-gray-900 hover:bg-yellow-500 px-4 py-4 rounded">Contact Us +260974125846</button>
    </div>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold  mb-4 md:mb-6 ">The Parent Dog</h2>
      <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      
      <li>
        <a href="#" className="block overflow-hidden group">
        <ModalImage
  small="https://images.unsplash.com/photo-1673289072037-de784a40c145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
  large="https://images.unsplash.com/photo-1673389434676-8cdfad013ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
  alt="Hello World!"  
/>  
        </a>
      </li>
    
      <li >
        <a href="#" className="block overflow-hidden group">
        <ModalImage
  small="https://images.unsplash.com/photo-1673289072037-de784a40c145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
  large="https://images.unsplash.com/photo-1673389434676-8cdfad013ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
  alt="Hello World!"  
/>  
        </a>
      </li>
    
    </ul>
     
  </div>

    </>
      )}
      <Footer />
    </>
  )
}

export default DogDetails