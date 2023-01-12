import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import SingleBlog from '../component/SingleBlog'
import PuffLoader  from "react-spinners/PuffLoader";
const Blogs = () => {
  let [loading , setLoading] = React.useState(false)

  React.useEffect(()=>{
         setLoading(true)
      setTimeout(()=>{
         setLoading(false)
        },2000)
      },[])
  /* blogs object here */
  const blogs =[{
    id:1,
    title:"HOW TO KNOW IF A DOG BREEDER IS REPUTABLE.",
    img:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    article: "Your new dog is a fur-ever member of your family from the minute you bring them home. However, their first family – the breeder and their parents – play a huge role.....  ",
    time: "13:20PM"
},{
  id:2,
  title:"HOW TO TELL IF A PUPPY IS HEALTHYY",
  img:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  article: "The first meeting with your puppy is all-important. Not only do you want it to be puppy love at first sight – but it’s a crucial chance to make sure the puppy is healthy enough for adoption! If you visit the breeder prior to bringing home your new pup,",
  time: "13:20PM"
}] 
/*  blogs map  */

const blog_map = blogs.map(blog=><SingleBlog
key={blog.id} blog={blog}

/>)

  /* js Executions at bottom   */
const pageTitle = "Blogs"
const para ="Legacy kennels provides weekly blogs concerning dogs in general. Feel free every week to come through and gain some knowledge about dogs which in return will help make you an excellent and responsible pet owner."
return (
    <> 
<Navigation />
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
    <Heading title={pageTitle} para={para} />
   {/*  <!-- Component Code --> */}
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
   
  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
    
  {blog_map}
     
  </div>
</div>
{/* Footer section here */}
 
  </>
   )} 
   <Footer />
  </>
  )
}

export default Blogs