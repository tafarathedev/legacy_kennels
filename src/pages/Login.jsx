import React,{useState , useEffect} from 'react'
import logo from '../assets/LK.svg'
import {useNavigate ,Link} from 'react-router-dom'
import AuthService from '../services/Auth.service.js'
import { ToastContainer, toast  } from "react-toastify";





 

const Login = () => {
   //user registration state
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 

//navigation function to restrit goin back to route
const navigate  = useNavigate() 

const notify = () => toast.success(`Login Success`, {
  position: "top-left",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress:'',
  theme: "dark",
  });;


   //handle Sign up function
   const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email.toLocaleLowerCase().toString().trim(), password.toString().trim()).then(
        () => {
            notify()
            setTimeout(()=>{
              navigate("/");
              
            },2000)
          
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

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
                onSubmit={handleLogin}
                autocomplete="off"
                className="space-y-4 md:space-y-6">
                      {/* email */}
                      <div className="relative">
                          <input type="email" id="floating_outlined" name="email" value={email}   onChange={(e) => setEmail(e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:bg-gray-800   rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required placeholder=" " />
                         <label htmlFor="floating_outlined" className="absolute bg-trasnparent text-sm text-gray-600 dark:text-gray-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800  px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">E-mail Address</label>
                    </div>
               
                {/* password */}
                <div className="relative">
                          <input type="password" id="floating_outlined" name="password" value={password}   onChange={(e) => setPassword(e.target.value)}className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 dark:bg-gray-800   rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " required />
                         <label htmlFor="floating_outlined" className="absolute bg-trasnparent text-sm text-gray-600 dark:text-gray-50 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800  px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Set Password</label>
                    </div>
                    <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up here</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
    
  </section>
    </>
  )
}

export default Login