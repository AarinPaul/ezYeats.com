import React, { useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const verify = () => {

     const [searchParams, setSearchParams] = useSearchParams();
     const success = searchParams.get("success")
     const orderId = searchParams.get("orderId")

     const {url} = useContext(StoreContext);
     const navigate = useNavigate();

     const verifyPayment = async () => {
          const response = await axios.post(url+"/api/order/verify",{success,orderId});
          if (response.data.success){
               navigate("/myorders");
               toast.success("Order Placed Successfully 🎉")
          }
          else{
               navigate("/")
               toast.error("Order Failed ❌")
          }
     }

     useEffect(()=>{
          verifyPayment();
     },[])


  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default verify
