import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import Services from './component/Services'
import Terms_Conditions from './pages/Terms&Conditions'
import NotFound from './pages/404NotFound'
import Cart from './pages/Cart'
import Blogs from './pages/Blogs'
import Dogs from './pages/Dogs'
import DogDetails from './pages/DogDetails'
import FAQs from './pages/FAQs'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products/product_details" element={<ProductDetails/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/terms_and_conditions" element={<Terms_Conditions/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/dogs" element={<Dogs/>} />
        <Route path="/dogs/dog_details" element={<DogDetails/>} />
        <Route path="/blogs"  element={<Blogs/>}/>
        <Route path="/frequently_asked_questions"  element={<FAQs/>}/>
        <Route path="*"  element={<NotFound />} />
        
      </Routes>
    </Router>
  </React.StrictMode>,
)
