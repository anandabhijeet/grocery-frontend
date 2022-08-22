import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { removeFromBasket } from '../../Redux/Action/Action';
import QuantityComponent from '../QuantityComponent/QuantityComponent';
import "./ReviewCard.css";
const ReviewCard = (prop) => {
  const item = prop?.data;
const dispatch = useDispatch();
  return (
    <div className="review-card">
      <div className="image-review-box">
        <img src={item?.image} width="65px" alt="veg-img" />
      </div>
      <div className='name-brand-review'>
        <p className='name-brand'>{item?.brand}</p>
        <p className='name-brand'>{item?.name}</p>
        <p style={{fontSize:"10px", margin:"5px 0px 0px 0px"}}>2 X {item?.price}</p>
      </div>
      <div className="qty-box">

        <QuantityComponent id={item?._id} quantity={item?.quantity} />
      </div> 
      <div className="final-price-box">
        <p>Rs {item?.price}</p>
        <span onClick={()=>dispatch(removeFromBasket(item?._id))}>&#10060;</span>
      </div>
    </div>
  )
}

export default ReviewCard;