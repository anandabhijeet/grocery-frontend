import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./ReviewCheckout.css";
const ReviewCheckout = () => {
  const navigate = useNavigate();

  const basketItem = useSelector((state) => state?.basket);
  let subtotal = 0;
  const subtotal_price = basketItem.map(
    (item) => (subtotal = subtotal + item.quantity * item.price)
  );

  return (
    <div className="review-checkout">
      <div className="apply-delivery-charges">
        <p>**Actual Delivery Charges computed at checkout</p>
      </div>
      <div className="review-checkout-box">
        <div className="sub-total">
          <div className="subtotal-price sub">
            <p>Sub Total:</p>
            <p>{subtotal_price[subtotal_price.length - 1]}</p>
          </div>
          <div className="delivery-charges sub">
            <p>Delivery:</p>
            <p>**</p>
          </div>
        </div>
        <div onClick={() => navigate("/checkout")} className="checkout-button">
          <p>View Basket & Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCheckout;
