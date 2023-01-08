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
        <Hero />
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
