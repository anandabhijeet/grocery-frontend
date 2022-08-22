import React from 'react'
import CheckoutItemTable from '../../Components/CheckoutTables/CheckoutItemTable';
import CheckoutSection from '../CheckoutSection/CheckoutSection';
import { useSelector } from 'react-redux';
import "./CheckoutBody.css"
const CheckoutBody = () => {
  const basket = useSelector(state=>state?.basket);
  return (
    <section className='checkout-body'>
        <div className="container checkoutBody ">
            <h3>Your Basket ({basket.length})</h3>
            <hr className="solid" />
            {basket.length>0? <div>
            <CheckoutItemTable/>
            <CheckoutSection/>
            </div>:<h3>No Item in the basket</h3>}
           
        </div> 
       
    </section>
  )
}

export default CheckoutBody;