import React from 'react'
import {Link} from 'react-router-dom'
import UserNavigation from '../component/UserNavigation'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import SingleBlog from '../component/SingleBlog'
import PuffLoader  from "react-spinners/PuffLoader";
const Blogs = () => {
  let [blogs , setBlogs] = React.useState([{
    
  }])

  React.useEffect(()=>{
       
      },[Blogs])

/*  blogs map  */

const blog_map = blogs.map(blog=><SingleBlog
key={blog.id} blog={blog}

/>)

  /* js Executions at bottom   */
const pageTitle = "Blogs"
const para ="Legacy kennels provides weekly blogs concerning dogs in general. Feel free every week to come through and gain some knowledge about dogs which in return will help make you an excellent and responsible pet owner."
return (
    <> 
<UserNavigation />
    
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
   
   <Footer />
  </>
  )
}

export default Blogs