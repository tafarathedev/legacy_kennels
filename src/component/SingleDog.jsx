import React from 'react'
  
const SingleDog = () => {
  return (
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/dogs/dog_details">
          <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
          <div class="px-4 py-3 w-72 ">
            <p class="text-lg font-bold text-black truncate block capitalize">Dog Name</p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">K149</p>
            
              <div class="ml-auto"><span class="material-symbols-outlined">
call
</span></div>
            </div>
          </div>
        </a>
      </div>
  )

}

export default SingleDog