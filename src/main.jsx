import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import About_us from './component/Services'
import Services from './component/Services'
import Terms_Conditions from './pages/Terms&Conditions'
import NotFound from './pages/404NotFound'
import SingleDog from './component/SingleDog'
import Cart from './pages/Cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/product_details" element={<ProductDetails/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/terms_and_conditions" element={<Terms_Conditions/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/dog" element={<SingleDog/>} />
        <Route path="/*"element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
