import React from 'react'
import {Link} from 'react-router-dom'
const SingleBlog = props => {
  console.log(props)
  return (
    <div className="rounded overflow-hidden shadow-lg">
  <Link to="#"><div className="relative">
    <img className="w-full" src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
<div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

    <Link to="!#"><div className="text-sm absolute top-0 right-0 bg-gray-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-gray-600 transition duration-500 ease-in-out">
      <span className="font-bold">27</span>
      <small>Sept</small>
      </div></Link>
    </div></Link>
  <div className="px-6 py-4">
    <Link to="#" className="font-semibold text-lg inline-block hover:text-gray-600 transition duration-500 ease-in-out">{props.blog.title}</Link>
    <p className="text-gray-500 text-sm">
      {props.blog.article}
    </p>
  </div>
  <div className="px-6 py-2 flex flex-row items-center">
    <span to="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">

      <span className="ml-1">{props.blog.time}</span></span>
  </div>
</div>
    
  )
}

export default SingleBlog