import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../asset/logo.png"
import { MdOutlinePhonelinkRing } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';
const TopNav = () => {
    return (
        <div>
                  <div className="  ">
      <div className="flex  blog flex-col md:flex-row  justify-between px-10	 lx:px-12    items-center ">
         
          {/* <img  src={logo} className="w-24" alt="" /> */}
          <Link to="/">
            <div className="  flex items-center">
              <img
                className="w-24"
                alt="logo"
                src={logo}
              />
            </div>
          </Link>
         
        <div className="grid grid-cols-2 justify-items-center items-center gap-12  ">
           
          <div
            className="flex items-center font-bold text-blue-800   gap-2"
            
          >
            <div>
              <MdOutlinePhonelinkRing className="text-[10px] lg:text-2xl    " />
            </div>
            <div>
              <p className="text-[10px] lg:text-xs   	">
              
              <a href='tel:+01333-388686 ' className="  text-blue-800	">
              +880 1333-388686  
              </a> 
              </p>
              <p className="text-[10px] lg:text-xs  text-blue-800	 	">01643-390832  </p>
            </div>
          </div>
          <div
            className="flex items-center font-bold text-blue-800   gap-2"
            // style={{ color: "#92468E" }}
          >
            <div>
              <HiOutlineMailOpen className="text-[10px] lg:text-2xl  	  " />
            </div>
            <div>
              <p className="text-[10px] lg:text-xs     	">
                Email us
              </p>
              {/* <p className="text-[10px] lg:text-xs	 	">info@mrs.mrg.com.bd</p> */}
              <a href='mailto:info@mrs.mrg.com.bd' className="text-[10px] lg:text-xs text-blue-800 	">info@mrs.mrg.com.bd</a>
            </div>
          </div>
          {/* <div
            className="   lg:flex items-center font-bold    gap-2"
            style={{ color: "#92468E" }}
          >
            <div>
            <p className="text-[5px] sm:m-4 lg:text-xs text-transparent  bg-clip-text bg-gradient-to-l from-[#FECD04] to-[#F2A04A]  	">
                Link Organization
              </p>
            </div>
            <div>
              
              <a href="https://www.sub.ac.bd/" target="_blank" ><img src={sub} className="  w-40 lg:w-28  	" alt=""/></a>
              <a href="https://schs.edu.bd/" target="_blank" ><img src={schs} className="   w-40 lg:w-28  	" alt=""/></a>
               
            </div>
          </div> */}
        </div>
      </div>
    </div>
        </div>
    );
};

export default TopNav;