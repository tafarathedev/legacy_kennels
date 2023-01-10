import React from 'react'

const Heading = props  => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="bg-gray-100 rounded-lg px-4 py-6 md:py-8 lg:py-12">
        <p class="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3 select-none">Introducing</p>
  
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 select-none">{props.title}</h2>
  
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto select-none">{props.para}</p>
      </div>
    </div>
  </div>
  )
}

export default Heading