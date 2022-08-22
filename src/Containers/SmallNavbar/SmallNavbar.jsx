import React from "react";
import logo from "../../Assets/small-basket.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SmallNavbar.css";
const SmallNavbar = ({ setSidebar }) => {
  const basketItem = useSelector((state) => state?.basket);
  const navigate = useNavigate();
  return (
    <nav className="navbar custom-small-navbar navbar-light  bg-light d-lg-none d-xl-none ">
      <div className="container-fluid small-navbar-container">
        <i
          onClick={() => {
            setSidebar(true);
          }}
          className="fa-solid fa-bars py-1"
        ></i>

        <div onClick={() => navigate("/")}>
          <img
            src={logo}
            height="45px"
            width="85px"
            className="img-fluid"
            alt=""
          />
        </div>

        <div onClick={() => navigate("/checkout")} className="cart-icon-box">
          {basketItem.length > 0 ? (
            <div className="custom-badge">
              <p>{basketItem.length}</p>
            </div>
          ) : null}
          <i className="fa-solid fa-cart-plus"></i>
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
