import React from 'react';
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
        <nav className=" flex justify-between ">
        <div className="flex flex-row gap-4 px-8  items-center">
            <a href="#"><img src={logo} 
            alt="logo"
            className="h-12 w-12" /></a>
            <a href="#"><img src={logotitle}
            alt="logotitle" 
            className="h-6 w-30" /></a>
        </div>
        <div className="flex flex-row space-x-4 gap-4 mr-8 ">
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
        </nav>

    </div>
  )
}

export default Navbar;