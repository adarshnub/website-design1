
import './App.css';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { BsShare ,BsBookmark,BsLightningCharge } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { GoMail } from 'react-icons/go';
import Navbar from './components/Navbar/Navbar';
import Logo2 from "./Images/logo2.png";
import Profile from "./Images/profile.png";

function App() {
  return (
    <div className="bg-indigo-50">
    <Navbar />
    <div className="bg-indigo-50 ">

      {/*main container*/}
    <div className=" container mx-auto w-2/3 mt-8 drop-shadow-sm ">
      
      <div className="flex gap-2 items-center  ">
        <button><HiOutlineArrowSmLeft /></button>
        <h1 className="text-md font-bold">Back to jobs</h1>
      </div>

      {/*first hero component*/}
      <div className="flex justify-between mb-6 py-8 bg-white rounded-md   duration-500 hover:scale-125">
        <div className="flex flex-col ml-8 gap-4">{/*left side*/}
          <div className="flex space-x-6">
            <div>
              <img src={Logo2} alt="logo"
              className="h-24" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold">Architectural Designer</span>
              <span className="text-sm font-semibold">Black Mountain Archietecture</span>
              <h5 className="text-xs font-semibold">Posted 07/27/2022</h5>
            </div>
          </div>
          <div className="text-sm font-semibold space-x-4 sm:flex-col ">
            <button className="px-4 py-1 bg-black text-white rounded-3xl md:ml-3">Architecture</button>
            <button className="px-4 py-1 rounded-3xl bg-green-200">Freelance</button>
            <button className="px-4 py-1 rounded-3xl bg-blue-200 md:mt-4 ">Long-Term</button>
          </div>
        </div>

        <div className="flex flex-col space-y-4 mr-8">{/*right side*/}
          <div className="flex justify-end gap-6">
            <BsShare />
            <BsBookmark />
          </div>
          <span className="text-xl bg-green-200 px-4 py-2 font-semibold">Status: Accepting Applications</span>
          <button className="rounded-3xl text-white bg-orange-600/75 text-xl px-4 py-1 font-bold  hover:bg-red-500">Apply on Archslate</button>
        </div>
      </div>
    
    </div>

    {/*heroComponent2*/}
    <div className=" container mx-auto w-2/3 mt-8 ">
      <div className=" container mx-auto   drop-shadow-sm flex  space-x-16 w-full ">
        <div class="box-content h-32 w-44 p-4 bg-white rounded-md duration-500 hover:scale-125  md:flex-wrap">
           <diV className="flex gap-2 items-center font-bold mb-4">
            <BsLightningCharge />
            <span className="text-sm">Software Skills</span>
           </diV>
           <div className="flex font-semibold text-xs text-white items-center gap-2 mb-2 ml-2">
            <button className=" bg-black  rounded-xl items-center flex px-3 py-1 gap-2">
              <BsLightningCharge />
              <span >Rhino</span>
            </button>
            <button className=" bg-black rounded-xl py-1 px-3">Sketchup</button>
           </div>
           <div className="ml-8">
            <button className="bg-black text-white text-xs font-semibold rounded-xl py-1 px-3 ">Vectorworks</button>
           </div>
        </div>
        <div class="box-content h-32 w-44  p-4 bg-white rounded-md duration-500 hover:scale-125">
          <diV className="flex gap-2 items-center font-bold mb-4">
            <AiOutlineStar />
            <span className="text-sm">Experience</span>
           </diV>
           <h1 className="text-xl ml-8">Associate</h1>
           <h1 className="text-xl ml-8">3+ years</h1>
        </div>
        <div class="box-content h-32 w-44 p-4 bg-white rounded-md duration-500 hover:scale-125">
          <diV className="flex gap-2 items-center font-bold mb-4">
            <BiDollar />
            <span className="text-sm">Rate</span>
          </diV>
            <h1 className="text-xl ml-6">$55-$65/hour</h1>
        </div>
        <div class="box-content h-32 w-44 p-4 bg-white rounded-md duration-500 hover:scale-125">
          <diV className="flex gap-2 items-center font-bold mb-4">
            <GrLocation />
            <span className="text-sm">Location</span>
          </diV>
          <h1 className="text-xl ml-8">Bozeman,MT</h1>
          <h1 className="text-xl ml-8">USA</h1>
          <button className="bg-pink-200 rounded-xl px-3 py-1 ml-8 text-xs font-bold mt-2">On-Site</button>
        </div>
      </div>
    </div>

    {/*heroComponent3*/}
    <div className="flex justify-between container mx-auto w-2/3 mt-8 space-x-14    ">{/*parent container*/}
      <div className="box-content bg-white  w-3/4  rounded-md duration-500 hover:scale-110">{/*left side*/}
        <div className="container mx-auto w-4/5 mt-10">
        <div>
          <h1 className="font-bold ">About this role</h1>
          <span className="text-md">Short overview about job and the way that the candidate would fit into the company. <br/>
          Can also include extra instructions for the application process if any exist.</span>
        </div>
        <div>
          <h1 className="font-bold ">Responsibilities</h1>
          <ul className="list-disc ml-8 text-md">
            <li>specific day to day task</li>
            <li>deliverables</li>
            <li>work environment requirements</li>
            <li>role within the current team</li>
            <li>etc.</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">Skills</h1>
          <ul className="list-disc ml-8 text-md">
            <li>software skills</li>
            <li>technical skills</li>
            <li>soft skills</li>
            <li>others</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">Qualifications</h1>
          <h3>Required</h3>
          <ul className="list-disc ml-8 text-md">
            <li>education</li>
            <li>licenses and certifications</li>
            <li>experience needed</li>
          </ul>
          <h3>Bonus</h3>
          <ul className="list-disc ml-8 text-md">
            <li>education</li>
            <li>licenses and certifications</li>
            <li>experience needed</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">Rate</h1>
          <ul className="list-disc ml-8 text-md">
            <li>if available</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">Time Estimate</h1>
          <ul className="list-disc ml-8 text-md">
            <li>if applicable</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">Work Autoriation</h1>
          <ul className="list-disc ml-8 text-md">
            <li>tbd</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold ">About Company</h1>
          <span className="text-md">Description of company with any uniform info or disclaimers - equal hiring opportunity, etc.
          </span>
        </div>
        </div>

        {/*three buttons*/}
        <div className="flex gap-4 justify-center mt-4 mb-12">
        <button className="rounded-3xl text-white bg-orange-600/75 text-lg px-4 py-1 font-bold">Apply on Archslate</button>
          <button className=" bg-black text-white font-semibold text-lg rounded-3xl flex items-center  px-4 py-1 gap-4">
              <AiOutlineStar />
              <span >Save</span></button>
          <button className=" bg-black text-white font-semibold text-lg rounded-3xl flex items-center gap-4 px-4 py-1">
              <BsShare />
              <span >Share & Refer</span></button>
        </div>
      </div>
      
      <div  class=" box-content  h-32 w-44 p-4 bg-white rounded-md duration-500 hover:scale-125">{/*right side*/}
        <diV className="flex gap-2 items-center font-bold mb-4">
            <GrLocation />
            <span className="text-sm">Job Poster</span>
        </diV>
        <div className="flex gap-2">
          <img 
          src={Profile} 
          alt="profile pic"/>
          <diV>
            <h1 className="text-lg">John Carlos</h1>
            <span className="font-bold text-xs">Project Manager</span>
          </diV>
        </div>
        <button className=" bg-black text-white font-semibold text-sm rounded-xl flex items-center px-3 py-1 gap-2 mt-3 m-8 hover:bg-white hover:text-blue-600 border-2 hover:border-blue-700 ">
              <GoMail />
              <span >Message</span>
        </button>
      </div>
      
    </div>

    </div>
    </div>
  );
}

export default App;
