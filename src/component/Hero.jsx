import React from "react";
import { Link } from 'react-router-dom'
import backgroundVideo from '../assets/bg2.mp4'

const Hero = () => {

  /* example */
 
    return (
      <div
  className="relative flex items-center justify-center align-center h-screen mb-12 overflow-hidden inset-0 backdrop-blur-sm bg-white/30"
>
 
  <div
    className="relative z-30 p-5 m-auto text-2xl text-white bg-none bg-opacity-75 rounded-xl"
  >
      {/* hero content */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="select-none mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-lg text-base">
            Legacy Kennels, Dog Sales and Services
            
          </h2>
          <p className="select-none mb-6 text-base font-medium tracking-wide text-gray-300 justify-start md:text-lg">
          Welcome to legacy kennels, we are breeders and suppliers of pet related materials.
Our specialty is providing clients with puppies from a well thought out and practical breeding program. We tailor each breeding with what the dogs breed standard has to have, while insuring it meets the spectrum of demand for clients. Our clients testimonials speak for themselves which demonstrates very high satisfaction rates across the board.
          </p>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16 ">
            <input
          
              placeholder="Search by Dog breed"
             
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
            
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-yellow-600 hover:bg-yellow-500 focus:shadow-outline focus:outline-none"
            >
              Search 
            </button>
          </form>
          <p className="select-none max-w-md mb-10 text-xs font-thin tracking-wide text-gray-300 sm:text-sm sm:mx-auto md:mb-16 ">
          After we have sold you a dog or pet supplies, we will remain available to advise you and develop an appropriate cooperative communication.
          </p>
        </div>
      </div>
  </div>
  <video
    autoPlay
    loop
    muted
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none brightness-50"
  >
    <source
      src={backgroundVideo}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
x
</div>
           );
};
      
    
export default Hero;
