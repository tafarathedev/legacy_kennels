import React from 'react'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import UserNavigation from '../component/UserNavigation'
import axios from '../api/axios.js'


/* import ModalImage from "react-modal-image"; */
import { useParams } from 'react-router-dom'
import DogPreview from '../component/DogPreview'


const DogDetails = () => {

  const {id} = useParams()
  const [dogs ,setSingleDog] = React.useState([]) 
    
  React.useEffect(()=>{
     
      axios.get(`/dogs/${id}`,{mode:"cors"})
      .then(res=>{
         console.log(res.data.dog)
        if(res.data.dog){
    
             setSingleDog(res.data.dog)
         }
         return res.data.dog
      })
      .catch(err=>alert(err))
   },[])


    const para ="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium quaerat porro cum illo aspernatur quibusdam dolore, accusantium cumque! Quo a iure hic, et id quisquam repellat itaque mollitia saepe?"
  return (
    <>  
 <UserNavigation />
      
    
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8"> 
    
    <Heading title="Bruno the BoerBull" para={para}/> 
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
         {  dogs &&   <DogPreview key={dogs._id} dog={dogs}/> }
    </ul>
    
   
    </div>
    <div className="flex justify-center items-center  mx-6 pt-6">
    <button type="button" className="bg-yellow-600 text-gray-900 hover:bg-yellow-500 px-4 py-4 rounded">Contact Us +260974125846</button>
    </div>
 

  
      <Footer />
    </>
  )
}

export default DogDetails