import React from 'react';
import { useSelector } from 'react-redux';
import "./Sidebar.css";
const Sidebar = ({sidebar, setSidebar}) => {
  const products = useSelector((state) => state?.gettingProduct?.products);
  const categories = products?.category;
  return (
    <div className={sidebar?'sidebar d-lg-none d-xl-none':'sidebar d-none'}>
      <div className="home flex">
        <p>Category</p>
        <i onClick={()=>setSidebar(false)} className="fa-regular fa-circle-xmark"></i>
      </div>

      {categories?.map((el, index)=>{
        return <div key={index} className="categories flex">
        <p>{el}</p>
      </div>
      })}

    </div>
  )
}

export default Sidebar;