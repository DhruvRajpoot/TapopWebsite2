import React, { useState } from "react";
import * as hi from "react-icons/hi";
import * as hi2 from "react-icons/hi2";
import logo from "../assets/tapopmobile.png";
import PrimaryButton2 from "./PrimaryButton2";
import Sidebar from "./Sidebar";

const NavbarMobile = (props) => {
   const [sideBarToggle, setSideToggle] = useState(false);
   const cart = [];
   const username = '';

   return (
      <>
         <div className={`flex flex-col justify-center sticky top-0 h-[80px] px-2 xsm:px-5 w-screen ${sideBarToggle ? 'bg-white' : 'bg-transparent'} md:hidden`} style={{
            zIndex: '997',
            backdropFilter: `${sideBarToggle ? 'none' : 'blur(28px)'}`
         }}>
            <div className="flex items-center h-[48px]">
               <img src={logo} className="w-8" alt="logo"/>
               <div className="ms-auto flex items-center gap-2 xsm:gap-3">
                  {!props.showCart ?
                     <>
                        {username === '' ?
                           <PrimaryButton2 height={'48px'} text="Try for Free" />
                           : <button className={`${sideBarToggle ? 'border border-black' : ''} font-[600] bg-[#ffffff] rounded-[100px] py-[10] px-[24px] w-fit h-[56px] border border-black`}>My Accounts</button>
                        }
                     </> :
                     <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[64px] bg-white" style={{
                        cursor: 'pointer',
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)"
                     }}>
                        <div className="text-2xl relative text-[#1A1A1A]">
                           <hi.HiOutlineShoppingCart />
                           {cart.length > 0 && <div className=" flex flex-col justify-center items-center absolute top-[-6px] right-[-6px] border border-white bg-[#F54040] text-white w-4 h-4 rounded-full font-[600] text-[8px] " >{cart.length}</div>}
                        </div>
                     </div>
                  }
                  <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[64px] bg-white" style={{
                     cursor: 'pointer',
                     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)"
                  }} onClick={() => setSideToggle(!sideBarToggle)}>
                     <span className="text-xl">{sideBarToggle ? <hi2.HiXMark /> : <hi2.HiBars3 />}</span>
                  </div>
               </div>
            </div>
         </div>
         {sideBarToggle && <Sidebar setSideToggle={setSideToggle} />}
      </>
   );
}

export default NavbarMobile;