import React from 'react'
import CheckoutBody from '../../Containers/CkeckoutBodySection/CheckoutBody';
import Navbar from '../../Containers/Navbar/Navbar';
import SmallNavbar from '../../Containers/SmallNavbar/SmallNavbar';
import "./CheckoutPage.css";
const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
        <Navbar/>
        <SmallNavbar/>
        <CheckoutBody/>
        
    </div>
  )
}

export default CheckoutPage;