import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import SingleBlog from '../component/SingleBlog'

const Blogs = () => {
  /* blogs object here */
  const blogs =[{
    id:1,
    title:"HOW TO KNOW IF A DOG BREEDER IS REPUTABLE.",
    article: "Your new dog is a fur-ever member of your family from the minute you bring them home. However, their first family – the breeder and their parents – play a huge role.....  ",
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
    <Heading title={pageTitle} para={para} />
   {/*  <!-- Component Code --> */}
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
   
  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
    
  {blog_map}
     
  </div>
</div>
{/* Footer section here */}
    <Footer />
 
  </>
  )
}

export default Blogs