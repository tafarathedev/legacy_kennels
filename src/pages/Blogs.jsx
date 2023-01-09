import React from 'react'
import {Link} from 'react-router-dom'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import SingleBlog from '../component/SingleBlog'

const Blogs = () => {
  /* js Executions at bottom   */
const pageTitle = "Blogs"
const time = "13:20PM"
const para ="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated"
  return (
       <>   
    <Navigation />
    <Heading title={pageTitle} para={para} />
   {/*  <!-- Component Code --> */}
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
   
  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
    {/* blogs component */}
    <SingleBlog />
 
  </div>
</div>
{/* Footer section here */}
    <Footer />
 
  </>
  )
}

export default Blogs