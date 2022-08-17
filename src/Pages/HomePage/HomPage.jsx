import React from 'react'
import BodySection from '../../Containers/BodySection/BodySection';
import Carousel from '../../Containers/Carousel/Carousel';
import Navbar from '../../Containers/Navbar/Navbar';

import "./Hompage.css";
const HomPage = () => {
  return (
    <div><Navbar/>
   
    <Carousel/> 
   
    <BodySection/>
    </div>
  )
}

export default HomPage;