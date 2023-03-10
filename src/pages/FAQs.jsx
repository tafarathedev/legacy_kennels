import React from 'react'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import UserNavigation from '../component/UserNavigation'
import SingleQuestion from '../component/SingleQuestion'
import PuffLoader  from "react-spinners/PuffLoader";
const FAQs = () => {
  let [loading , setLoading] = React.useState(false)

  React.useEffect(()=>{
         setLoading(true)
      setTimeout(()=>{
         setLoading(false)
        },2000)
      },[])
    /* heading variables */
    const title = "Frequently asked questions"
    const para = "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
/* props questions object here */
const question ="What is the best breed you have"
const answer ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nostrum vero repellat voluptatum blanditiis, nam voluptate minus porro commodi eos optio. Minus corporis cumque atque aut quos iusto exercitationem placeat."
    /* state for showing and hiding answers  */
    const [visible , setVisible] = React.useState("hidden")
   const handleToggleVisibility = ()=>{
    if(visible === "hidden"){
        setVisible("visible")
    }else if(visible === "visible"){
        setVisible("hidden")
    }
    return
   }
    
  return (
    <> 
    <UserNavigation />
    {

loading? (
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
 

      <div className="bg-white py-6 sm:py-8 lg:py-12">
   
        <Heading title={title} para={para}/>
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
   {/*  <!-- text - start --> */}
  {/*   <!-- text - end --> */}

    <div className="flex flex-col max-w-screen-sm border-t mx-auto">
     {/*  <!-- questions- start --> */}
     
  <SingleQuestion 
  question={question} 
  answer={answer} 
  visible={visible} 
 handleClick={handleToggleVisibility}/>

    {/*   <!-- questions - end --> */}
    </div>
  </div>
</div>
 
    )}  
<Footer />
  </>
  )
}

export default FAQs