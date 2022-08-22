import React,{useState} from 'react'
import BodySection from '../../Containers/BodySection/BodySection';
import Carousel from '../../Containers/Carousel/Carousel';
import Navbar from '../../Containers/Navbar/Navbar';
import Sidebar from '../../Containers/Sidebar/Sidebar';
import SmallNavbar from '../../Containers/SmallNavbar/SmallNavbar';

import "./Hompage.css";
const HomPage = () => { 
  const [fixNavbar, setFixNavbar] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const changeNavBar = () => {
    if (window.scrollY >= 65) {
      setFixNavbar(false);
    }

    if (window.scrollY <= 65) {
      setFixNavbar(true);
    }
  };

  window.addEventListener("scroll", changeNavBar);
  return (
    <div style={{margin:" 0px auto", position:"relative"}}><Navbar fixNavbar={fixNavbar} />
    <SmallNavbar setSidebar={setSidebar}/>
   
   <div className={fixNavbar?'homepage-body':'homepage-body homepage-margin'}>
   <Carousel/> 
   
   <BodySection/> 
   <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
   </div>
    </div>
  )
}

export default HomPage;