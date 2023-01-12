import React from 'react'
import PuffLoader  from "react-spinners/PuffLoader";
const Terms_Conditions = () => {
  let [loading , setLoading] = React.useState(false)

  React.useEffect(()=>{
         setLoading(true)
      setTimeout(()=>{
         setLoading(false)
        },2000)
      },[])
  return (
    <>  
   {    loading? (
      <div className=" flex items-center justify-center h-screen">
      <PuffLoader 
      color={"#333"}
      loading={loading}
      
      aria-label="Loading Spinner"
      data-testid="loader"
      size={60}
      />
      </div>
      ):(   
  <div>terms and conditions </div>
)}
  </>
  )
}

export default Terms_Conditions