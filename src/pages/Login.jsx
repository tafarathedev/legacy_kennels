import React from 'react'
import logo from '../assets/LK.svg'
import {useNavigate ,Link} from 'react-router-dom'
import AuthService from '../services/Auth.service.js'
import { ToastContainer, toast  } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../component/Footer';




 

const Login = () => {
   //user registration state
   const [user , setUser] =React.useState({
    email:"",
    password:"",
    isChecked:false
   })
  const[errMsg , setErrMsg] = React.useState('')

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
  

   //handle Sign up function
  async function handleLogin(event){
     event.preventDefault()
    const notify = () => toast.success('🦄Logging In', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });;
    try {
        await AuthService.login(user.email, user.password).then(
          (response) => {
            // check for token and user already exists with 200
            if (response) {
                setTimeout(()=>{
                  notify()
                  setUser({
                    email:"",
                    password:"",
                    isChecked:false
                  })
                      setTimeout(()=>{  
                        navigate("/");
                        window.location.reload();
                        console.log(res.data)
                      },3000)
                  },0)
             
              
               
                setErrMsg("Check your inputs")
            }
            //   console.log("Sign up successfully", response);
         
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
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
                onSubmit={handleLogin}
                className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" value={user.email}  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                   
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" name="isChecked" onChange={handleChange} value={user.isChecked} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="#">Terms and Conditions</Link></label>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
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