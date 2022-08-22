import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { decQuantity, incQuantity } from "../../Redux/Action/Action";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./QuantityComponent.css";

const QuantityComponent = (prop) => {
  const [qyt, setQyt] = useState(prop?.quantity);
  


  const dispatch = useDispatch();
  // const basketItems = useSelector(state=>state?.basket);
  // const item = basketItems.filter(el=> el?.data._id === prop?.id);
  // console.log("item", item);
  
  return (
    <div className="change-qty">
      <div
        onClick={() => {
          dispatch(decQuantity(prop?.id));
          setQyt(qyt - 1);
        }}
        className="dec-qty qty-button"
      >
        <p>-</p>
      </div>
      <div className="show-qty">
        {console.log("prop", prop)}
        <p>{qyt}</p>
      </div>
      <div
        onClick={() => {
          dispatch(incQuantity(prop?.id));
          setQyt(qyt + 1);
        }}
        className="inc-qty  qty-button"
      >
        <p>+</p>
      </div>
    </div>
  );
};

export default QuantityComponent;
