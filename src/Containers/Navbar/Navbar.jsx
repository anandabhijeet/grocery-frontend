/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import logo1 from "../../Assets/Big-basket.png";
import ReviewCard from "../../Components/ProductReviewCard/ReviewCard";
import ReviewCheckout from "../../Components/ReviewCheckout/ReviewCheckout";
import { useSelector, useDispatch } from "react-redux";
import logo2 from "../../Assets/Big-basket1.png";

import "./Navbar.css";
import { filteredProducts } from "../../Redux/Action/Action";
const Navbar = (prop) => {
  
  const dispatch = useDispatch();
  // const [fixNavbar, setFixNavbar] = useState(true);
  const basketItem = useSelector(state=>state?.basket);
  
  // const changeNavBar = () => {
  //   if (window.scrollY >= 65) {
  //     setFixNavbar(false);
  //   }

  //   if (window.scrollY <= 65) {
  //     setFixNavbar(true);
  //   }
  // };

  // window.addEventListener("scroll", changeNavBar);

  const products = useSelector((state) => state?.gettingProduct?.products);
  const categories = products?.category;

  return (
    <nav
      className={
        prop.fixNavbar
          ? "navbar bg-light main-navbar d-none d-lg-block d-xl-block"
          : "navbar bg-light main-navbar fixed-top nav-shadow d-none d-lg-block d-xl-block"
      }
    >
      <div className="container navbar-main-container">
        <div className="navbar-container">
          <div className="logo-box">
            <img
              src={prop.fixNavbar ? logo1 : logo2}
              alt="logo1"
              height={prop.fixNavbar ? "100px" : "45px"}
              width={prop.fixNavbar ? "110px" : "55px"}
            />
            <div className={prop.fixNavbar ? "dropdown" : "dropdown d-none"}>
              <button className="dropbtn">
                <p style={{ margin: "0px 30px 0px 0px" }}>Shop By Category</p>
                <i
                  className="fa fa-angle-down"
                  style={{ margin: "5px 0px 0px 35px" }}
                ></i>
              </button>
              <div className="dropdown-content">
                {categories?.map((cat, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        dispatch(
                          filteredProducts(products?.data, cat.toLowerCase())
                        );
                      }}
                      className="contents"
                    >
                      <p style={{ margin: "0px", padding: "5px" }}>{cat}</p>
                      <hr style={{ margin: "0px" }} className="solid" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="contact-bucket-box">
            <div className={prop.fixNavbar ? "contacts" : "contacts d-none"}>
              <div className="phone contacts-option">
                <i
                  style={{ margin: "0px 5px 0px 5px" }}
                  className="fa fa-phone"
                ></i>
                <p style={{ margin: "0px" }}>1860 123 1000</p>
              </div>
              <div className="location contacts-option">
                <i
                  style={{ margin: "0px 5px 0px 5px" }}
                  className="fa fa-map-pin"
                ></i>
                <p style={{ margin: "0px" }}>560004, Banglore</p>
                <i
                  style={{ margin: "0px 0px 0px 10px" }}
                  className="fa fa-angle-down"
                ></i>
              </div>
              <div className="authentication contacts-option">
                <i
                  style={{ margin: "0px 5px 0px 5px" }}
                  className="fa fa-user"
                ></i>
                <p style={{ margin: "0px" }}>Login/Sign Up</p>
              </div>
            </div>
            <div className="bucket-button-box">
              <div className="bucket-button">
                <i
                  style={{
                    fontSize: "30px",
                    marginRight: "10px",
                    color: "#da241c",
                  }}
                  className="fa-solid fa-basket-shopping"
                ></i>
                <div className="bucket-items">
                  <h6>
                    My Basket <br /> {basketItem.length} items
                  </h6>
                </div>
              </div>
              <div className="bucket-item-review">
                {
                  basketItem.length>0?<div className="bucket-items">
                  <div className="review-card-section">
                   {basketItem?.map((el,index)=>{
                   return <div key={index}><ReviewCard  data={el} /></div>
                  })}
                  </div>
                   <ReviewCheckout />
                  </div>:<div className="container bucket-item-container">
                  <p>Your basket is empty. Start shopping now!</p>
                </div>
                 
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
