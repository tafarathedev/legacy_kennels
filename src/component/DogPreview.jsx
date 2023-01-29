import React from 'react'
import {Link} from "react-router-dom"

const DogPreview = (props) => {
  return (
    <>
      <li>
        <Link to="#" className="block overflow-hidden group">
        <img
            src={props.dog.image}
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
        </Link>
      </li>
    </>
  )
}

export default DogPreview