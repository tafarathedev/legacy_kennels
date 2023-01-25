import React from 'react'
import logo from '../assets/LK.svg'
import {useNavigate ,Link} from 'react-router-dom'
import AuthService from '../services/Auth.service.js'
import { ToastContainer, toast  } from "react-toastify";





 

const Register = () => {
   //user registration state
   const [user , setUser] =React.useState({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    cpassword:"0",
    agree:false
   })
   const [msg , setMsg] = React.useState("")

//navigation function to restrit goin back to route
const navigate  = useNavigate() 


//handle input change function
   function handleChange(event){
    const {name, type , checked, value} = event.target
     setUser((prevInfo)=>{
          return  {
            ...prevInfo,
            [name]:type ==="checkbox"?checked: value
           }
     })
   }
  
   const notify = () => toast.success(`${msg}`, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress:'',
    theme: "light",
    });;

   //handle Sign up function
   async function handleSignUp(event){
     event.preventDefault()
   
    try {
       const res = await AuthService.signup(user.email, user.password, user.firstName, user.lastName, user.agree)
              if(res){
                setUser(res)
                setMsg(res.message)
                notify()
                setTimeout(()=>{
                    navigate("/")
                },2000)
              }
      
      } catch (err) {
        return new Error(err);
      }
   }
  

  return (
    <>   
    <ToastContainer/>
<section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            LegacyKennels   
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form 
                onSubmit={handleSignUp}
                className="space-y-4 md:space-y-6">
                  {/* email */}
                   <div className="relative">
                          <input type="email" id="floating_outlined" name="email" value={user.email}  onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:bg-gray-800   rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" autoComplete='false' placeholder='' required />
                         <label htmlFor="floating_outlined" className="absolute bg-trasnparent text-sm text-gray-600 dark:text-gray-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800  px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">E-mail Address</label>
                    </div>
               
                {/* first name */}
                    <div className="relative">
                          <input type="text" id="floating_outlined" name="firstName" value={user.firstName}  onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:bg-gray-800   rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='' autoComplete='false' required />
                         <label htmlFor="floating_outlined" className="absolute bg-trasnparent text-sm text-gray-600 dark:text-gray-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800  px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First Name</label>
                    </div>
               {/* last name */}
               <div className="relative">
                          <input type="text" id="floating_outlined" name="lastName" value={user.lastName}  onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:bg-gray-800   rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='' autoComplete='false' required />
                         <label htmlFor="floating_outlined" className="absolute bg-trasnparent text-sm text-gray-600 dark:text-gray-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800  px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Last Name</label>
                    </div>
                    <div className="relative">
                          <input type="password" id="floating_outlined" name="password" value={user.password}  onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:bg-gray-800   rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='' autoComplete='false' required/>
                         <label htmlFor="floating_outlined" className="absolute bg-trasnparent text-sm text-gray-600 dark:text-gray-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800  px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Set Password</label>
                    </div>
               
                    <div className="relative">
                          <input type="password" id="floating_outlined" name="cpassword" value={user.cpassword}  onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:bg-gray-800   rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"placeholder='' autoComplete='false' required/>
                         <label htmlFor="floating_outlined" className="absolute bg-trasnparent text-sm text-gray-600 dark:text-gray-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800  px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm Password</label>
                    </div>
                  
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" name="agree" onChange={handleChange} value={user.agree} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don't have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
    
  </section>
    </>
  )
}

export default Register