import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/LK.svg'
import Modal from 'react-modal';
import AuthService from "../services/Auth.service";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UserNavigation =({name, email})=> {
  const [currentUser , setCurrentUser] = React.useState(undefined)
  const [visible, setVisible] = React.useState(false)
  const [toggle, setToggle] = React.useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [msg , setMsg] = React.useState("")
  
  const navigate = useNavigate()

  
  //handle signOut Function
  async function handleSignOut(){
    AuthService.logout(currentUser.user.token);
    const notify = () => toast.info('🦄Logging you Out', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   if(currentUser){
    setIsOpen(prevState=>!prevState)
    setVisible(prevState=>!prevState)
    setTimeout(()=>{
          //run a toast notification
              setMsg("Loging you Out")
              notify()
          setTimeout(()=>{
             window.location.reload()
             navigate("/")
          },3000)
    },0)
   }
    return user
  }
 
 
  const customStyles = {
    backgroundColor:"red",
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      justifyContent:"center",
      alignItems:"center",
      margin: "25px",
      width: "500px",
      height: "400px",
      background:"transparent",
      border:"none",
      outline:"none",
      transform: 'translate(-50%, -50%)',
    },
  };
  
  /* fetch user data from here using use Efect */
    React.useEffect(()=>{
      const user = AuthService.getCurrentUser()
      if(user){
        setCurrentUser(user)
      }
    },[])
  /*  bind modal element */
  Modal.setAppElement('#root');
    return (
     <>
    
    <ToastContainer/>

     <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 w-full   dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to="/" className="flex items-center">
      <img src={logo} className="h-5 mr-3 sm:h-9" alt="Legacy Kennels" />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">legacyKennels</span>
  </Link>
  <div className="flex items-center md:order-2">
  {
    currentUser?(
     <>
     <p className="text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white px-4">{`${currentUser.user.firstName} ${currentUser.user.lastName}`}</p>
      <button  type="button"  onClick={()=>{setVisible(!visible)}}  className="flex mr-6 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
       
        <img className="w-12 h-12 rounded-full" src={logo} alt="user photo"/>
      </button></>

    ):(
<>
     
<div  className="flex mr-3text-sm p-2 text-white  bg-transparent  md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"   >
      <Link to="/login">Login</Link>
    </div>
</>
    )
  }
     
   { visible &&  <div style={{position:"absolute", marginTop:"20rem",right:"5%"}} className="z-50  my-4 text-base list-none bg-white divide-y  divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white"> {`${currentUser.user.firstName} ${currentUser.user.lastName}`}</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{currentUser.user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
         
          <li>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile & Settings</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">WishList</Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cart</Link>
          </li>
          <li onClick={()=>{setIsOpen(!modalIsOpen)}}>
            <Link href="/"  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><button>Sign Out</button></Link>
          </li>
        </ul>
      </div>}
      <button data-collapse-toggle="mobile-menu-2" onClick={()=> setToggle(prevState=>!prevState)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
 <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>
    </ul>
  </div>
  <Modal
        isOpen={modalIsOpen}
        onRequestClose={modalIsOpen}
        style={customStyles}
        contentLabel="Account Deletion"
      > 
      <div  tabindex="-1" class="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" >
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal"onClick={()=>{setIsOpen(!modalIsOpen)}} >
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only" >Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Please Confirm your Logout request </h3>
                <button data-modal-hide="popup-modal" onClick={handleSignOut} type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                   Confirm
                </button>
                <button onClick={()=>setIsOpen(!modalIsOpen)} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
            </div>
        </div>
    </div>
</div>
      </Modal>
  </div>
  
</nav>

</>
    );
}
export default UserNavigation