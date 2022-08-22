import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filteredProducts } from '../../Redux/Action/Action';
import "./Sidebar.css";
const Sidebar = ({sidebar, setSidebar}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.gettingProduct?.products);
  const categories = useSelector((state)=>state?.category);
  return (
    <div className={sidebar?'sidebar d-lg-none d-xl-none':'sidebar d-none'}>
      <div className="home flex">
        <p>Category</p>
        <i onClick={()=>setSidebar(false)} className="fa-regular fa-circle-xmark"></i>
      </div>

      {categories?.map((el, index)=>{
        return <div key={index} onClick={()=>dispatch(
          filteredProducts(products?.data, el)
        )} className="categories flex">
        <p>{el.category}</p>
      </div>
      })}

    </div>
  )
}

export default Sidebar;