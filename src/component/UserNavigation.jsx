import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/LK.svg'
import Modal from 'react-modal';
import AuthService from "../services/Auth.service";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserNavigation =({name, email})=> {
 
  const [currentUser , setCurrentUser] = React.useState('')
  const [visible, setVisible] = React.useState(false)
  const [toggle, setToggle] = React.useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [msg , setMsg] = React.useState("")
  
  const navigate = useNavigate()
  const notify = () => toast.success(`Logging out`, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  
  //handle signOut Function
  async function handleSignOut(){
     AuthService.logout(currentUser.user.token);
   
   if(currentUser){
    setIsOpen(prevState=>!prevState)
    setVisible(prevState=>!prevState)
    setTimeout(()=>{
          //run a toast notification
             
              notify()
          setTimeout(()=>{
            navigate("/")
            window.location.reload()
          },3000)
    },0)
   }
    return user
  }
 
 
  const customStyles = {
   
    content: {
     width:"50%",
    
     
 
    },
  };
  
  /* fetch user data from here using use Efect */

    React.useEffect(()=>{
      const checkUser = AuthService.getCurrentUser()
    
      if(checkUser){
        setCurrentUser(JSON.parse(checkUser))
      }
    },[]) 
   
  Modal.setAppElement('#root');
    return (
     <>
    
    <ToastContainer/>

     <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to="/" className="flex items-center">
      <img src={logo} className="h-5 mr-3 sm:h-9" alt="Legacy Kennels" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">legacyKennels</span>
  </Link>
  <div className="flex items-center md:order-2">
  {
    currentUser?(
  
    
      <button  type="button"  onClick={()=>{setVisible(!visible)}}  className="flex mr-6 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
       <div className="relative">
    <img className="w-10 h-10 rounded-full" src={logo} alt="" />
    <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
      </button>

    ):(
<>
     
<div  className="flex mr-3text-sm p-2 text-white  bg-transparent  md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"   >
      <Link to="/login">Login</Link>
    </div>
</>
    )
  }
     
   { visible &&  <div className="z-50 absolute mt-20 top-0 right-5   overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white"> {`${currentUser.user.firstName} ${currentUser.user.lastName}`}</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{currentUser.user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
         
          <li>
            <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile & Settings</Link>
          </li>
          <li>
            <Link to="/wishist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">WishList</Link>
          </li>
          <li>
            <Link to="/cart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cart</Link>
          </li>
          <li onClick={()=>setIsOpen(prevState=>!prevState)}>
            <Link to="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><button>Sign Out</button></Link>
          </li>
        </ul>
      </div>}

      <button data-collapse-toggle="mobile-menu-2" onClick={()=> setToggle(!toggle)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-900" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
 <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col p-4 mt-4 border-none  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-900 bg-white text-gray-900  md:dark:bg-gray-900 dark:border-none">
      <li>
        <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="/frequently_asked_questions" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQs</Link>
      </li>
      <li>
        <Link to="/blogs" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs </Link>
      </li>
      <li>
        <Link to="/dogs" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Puppy Store</Link>
      </li>
      <li>
        <Link to="/products" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pet Supplies</Link>
      </li>
      <li>
        <Link to="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
      </li>
    </ul>
  </div>
  <Modal
        isOpen={modalIsOpen}
       className="fixed top-0 left-0 w-96  mx-auto mt-20 relative justify-center align-center right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      > 
  {/*    <div  tabindex="-1" className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div className="relative w-full h-full max-w-md md:h-auto"> */}
    <> 
       
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-6 text-center">
                <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button onClick={handleSignOut} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button onClick={()=>setIsOpen(!modalIsOpen)} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
    </div>
        </>
   {/*  </div>
</div> */}
      </Modal>
  </div>
  
</nav>

</>
    );
}
export default UserNavigation
{/* <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal"onClick={()=>{setIsOpen(!modalIsOpen)}} > */}
{/* <button onClick={()=>setIsOpen(!modalIsOpen)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button> */}