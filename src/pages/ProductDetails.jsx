import React, { useState } from "react";
import Footer from "../component/Footer";
import UserNavigation from "../component/UserNavigation";
import axios from '../api/axios.js'
import { useParams } from "react-router-dom";
import ProductPreview from "../component/ProductPreview";

const ProductDetails = props => {
    const [products ,setSingleProd] =React.useState(undefined) 
    
    const {id} = useParams()
    React.useEffect(()=>{
       
        axios.get(`/products/${id}`)
        .then(res=>{
           console.log(res.data)
          if(res.data){
      
               setSingleProd(res.data.product)
           }
           return res.data.product
        })
        .catch(err=>console.log(err))
     },[])


        //map product 
    
  
    
   

    return (
        <>  
         <UserNavigation />
            { 
              products && <ProductPreview key={products._id} product={products}/>
            
            }
        <Footer />
        
        </>
    );
};

export default ProductDetails;
