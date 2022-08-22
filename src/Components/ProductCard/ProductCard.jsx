import React, { useState} from "react";
import veg from "../../Assets/veg.png";
import { useDispatch } from "react-redux/es/exports";
import { addToBasket } from "../../Redux/Action/Action";
import { useSelector } from "react-redux/es/exports";
import "./ProductCard.css";

const ProductCard = ({product}) => {
  
  const dispatch = useDispatch();
  const basket = useSelector((state) => state?.basket);
  
  const inBasket = basket.findIndex((item) => item?._id === product?._id);
  let in_Basket = true;
  if (inBasket === -1) {
    in_Basket = false;
  }
  const [basketItem, setBasketItem] = useState(in_Basket);
  return (
    <div className="product-card">
      <div className="offer">
        <p>GET 40% OFF</p> <i className="fa-solid fa-sun mx-1"></i>
      </div>
      <div className="image-box">
        <div className="image">
        <img className="veg-nonVeg" src={veg} height="30px" alt="veg" />
          <img
            src={product?.image}
            className="img-fluid"
            height="80%"
            width="80%"
            alt="veg"
          />
           
        </div>
        
       
      </div>

      <p style={{ color: "grey", fontSize: "12px", margin: "0px" }}>
        {product?.brand}
      </p>

      <p>{product?.name}</p>

      <p>1 kg</p>

      <div className="price-box">
        <p style={{ margin: "0px", fontSize: "12px" }}>
          MRP: <span style={{ fontSize: "14px" }}>RS {product?.price}</span>
        </p>
        <div className="delivery">
          <i
            style={{ fontSize: "20px", color: "grey" }}
            className="fa-solid fa-truck truck"
          ></i>
          <p style={{ fontSize: "9px", margin: "0px 0px 0px 3px" }}>
            standard Delivery: Today 9:00AM - 11:00AM
          </p>
        </div>

        {basketItem ? (
          <button type="button" className="btn btn-success btn-sm">
            selected
          </button>
        ) : (
          <div className="add-box my-1">
            <div className="initial-quantity">
              <div className="qty">
                <p style={{ color: "rgb(204, 204, 204)" }}>Qty</p>
              </div>
              <div className="quantity">
                
                <p>1</p>
              </div>
            </div>

            <div
              onClick={() => { setBasketItem(true);dispatch(addToBasket(product))}}
              className="add-button"
            >
              <p>ADD</p>
              <i
                style={{ color: "grey" }}
                className="fa-solid fa-basket-shopping"
              ></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
