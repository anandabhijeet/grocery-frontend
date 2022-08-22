import React from 'react';
import logo from "../../Assets/Big-basket1.png";
import "./SmallNavbar.css";
const SmallNavbar = ({setSidebar}) => {
  return (
    
<nav class="navbar custom-small-navbar navbar-light  bg-light d-lg-none d-xl-none ">
  <div className="container-fluid small-navbar-container">
  <i onClick={()=>{setSidebar(true)}} className="fa-solid fa-bars py-1"></i> 

  <img src={logo} height="45px" width="45px" className="img-fluid" alt="" /> 

  <i class="fa-solid fa-cart-plus"></i>

  </div>
</nav>
  )
}

export default SmallNavbar