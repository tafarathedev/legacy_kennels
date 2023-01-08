import Contact_Us from "./component/Contact_Us"
import Footer from "./component/Footer"
import Hero from "./component/Hero"
import Navigation  from "./component/Navigation"
import NewsLetter from "./component/NewsLetter"
import SampleDogs from "./component/SampleDogs"
import Services from "./component/Services"
import About_us from "./component/About_us"
import SampleTestimonials from "./component/SampleTestimonials"

function App() {
 

  return (
    <div className="App">
    
    <Navigation />
      {/* Hero section component */}
      <header style={{backgroundImage:"url('https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')", 
          width:'100%',
          backgroundRepeat:'no-repeat',
          backgroundPostion:'fit',
          backgroundSize:'contain'
          }}>
        <Hero />
      </header>
       
       {/* main content */}
       <About_us />
       <Services/>
       <SampleDogs />
       <Contact_Us />
      <SampleTestimonials />
        <Footer />
  
    </div>
  )
}

export default App
