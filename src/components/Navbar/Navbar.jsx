import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from "../../Images/logo.png";
import logotitle from "../../Images/Archslate.png";
import icon1 from "../../Images/Icon1.png";
import icon2 from "../../Images/Icon2.png";
import icon3 from "../../Images/Icon3.png";
import icon4 from "../../Images/Icon4.png";
import icon5 from "../../Images/Icon5.png";


const Navbar = () => {
  return (
  <div className="bg-white py-2 drop-shadow-md">
  <div className="flex flex-wrap ">
  <section className="relative ">
     {/* navbar */}
    <nav className="flex justify-between   w-screen">
      <div className="px-5  py-2 flex w-full  justify-between">
        <div>
        <a className="flex px-8 items-center gap-4" href="#">
        <img src={logo} 
            alt="logo"
            className="h-12 w-12" 
        />
        <img src={logotitle}
            alt="logotitle" 
            className="h-6 w-30" />
        </a>    
        </div>    
          
        
        <div className="hidden lg:flex flex-row space-x-4 gap-4 mr-8 ">
            <div className= "flex items-center flex-col">
                <a href="#"><img src={icon1} alt="icon"  className="w-6 h-6 "/></a>
                <a href="#"><span className="text-sm font-semibold  ">Candidates</span></a>
            </div>
            <div className= "flex items-center flex-col">
                <a href="#"><img src={icon2} alt="icon" className="w-6 h-6"/></a>
                <a href="#"><span className="text-sm font-semibold ">Companies</span></a>
            </div>
            <div className= "flex items-center flex-col">
                <a href="#"><img src={icon3} alt="icon" className="w-6 h-6"/></a>
                <a href="#"><span className="text-sm font-semibold ">Jobs</span></a>
            </div>
            <div className= "flex items-center flex-col">
                <a href="#"><img src={icon4} alt="icon" className="w-6 h-6"/></a>
                <a href="#"><span className="text-sm font-semibold">Notifications</span></a>    
            </div>
            <div className= "flex items-center flex-col">
                <a href="#"><img src={icon5} alt="icon" className="w-6 h-6"/></a>
                <a href="#"><span className="text-sm font-semibold ">User Name</span></a>
            </div>
        </div>
       
      </div>

      
     
      
      <a className=" self-center mr-12 lg:hidden" href="#">
      <GiHamburgerMenu />
      
      </a>
    </nav>
    
  </section>
</div> 

    </div>
  )
}

export default Navbar;