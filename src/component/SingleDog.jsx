import React from 'react'
import {Link} from 'react-router-dom'
const SingleDog = ({dogs}) => {
  return (
    <> 
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    {
      dogs.map(dog=>(
        <Link key={dog._id} to={`/dogs/dog_details/${dog._id}`}>
          <img src={dog.image} alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
          <div class="px-4 py-3 w-72 ">
            <p class="text-lg font-bold text-black truncate block capitalize">{dog.name}</p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">K{dog.price}</p>
            
              <div class="ml-auto"><span class="material-symbols-outlined">
                    call
                      </span>
              </div>
            </div>
          </div>
        </Link>
      
      ))
    }
    </div>
   </>
  )

}

export default SingleDog