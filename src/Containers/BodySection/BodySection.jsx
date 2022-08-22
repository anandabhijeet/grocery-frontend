import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./BodySection.css";

const BodySection = (prop) => {
  const productData = useSelector(
    (state) => state?.filteringProduct?.filteredProduct
  );
  const title = useSelector((state) => state?.changingTitle);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-2 col-xl-2  d-none d-lg-block d-xl-block blank-col">
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-vector/diwali-festival-sale-poster-design_1017-15674.jpg?w=740&t=st=1660895024~exp=1660895624~hmac=16b6099f12c9eb6bcb034ba175efee44ca158e143591f737f73b4259ddff8bab"
            alt="offer"
          />
        </div>
        <div className="col col-lg-10 col-xl-10 col-md-12 col-sm-12 col-xs-12 content-col">
          <h3>{title}</h3>
          <div className="all-products">
            <i className="fa-solid fa-truck-moving"></i>
            <p>All Products</p>
          </div>
          <hr className="solid" />
          <div className="card-container">
            <div className="row card-row">
              {productData?.map((el) => {
                return (
                  <div
                    className=" col col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 "
                    key={el._id}
                  >
                    <ProductCard product={el} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
