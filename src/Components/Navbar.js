import React from "react";
import PrimaryButton2 from "./PrimaryButton2"
import NavbarMobile from "./NavBarMobile";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Navbar = (props) => {
  const cart = [];
  const username = '';

  return (
    <>
      <NavbarMobile showCart={props.showCart ? true : false} />

      <div className="hidden md:flex fixed top-0 left-0 w-full items-center justify-between px-3 lg:px-10 xl:px-20 py-[20px] h-[96px]" style={{
        background: "rgba(250, 250, 250, 0.74)",
        backdropFilter: "blur(28px)",
        zIndex: "997"
      }}>
        <img className="h-[36px] hover:cursor-pointer" src={require('../assets/TapopLogoBlack.png')} alt="logo" />
        <div className="flex items-center gap-[8px] lg:gap-[32px]">
          <button >About Us</button>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.95398 0.5L7.18881 4.30041H11.1848L7.95197 6.64919L9.1868 10.4496L5.95398 8.10081L2.72116 10.4496L3.95599 6.64919L0.723169 4.30041H4.71915L5.95398 0.5Z" fill="url(#paint0_linear_3051_38999)" />
            <defs>
              <linearGradient id="paint0_linear_3051_38999" x1="11.454" y1="11.5" x2="-1.57866" y2="7.93891" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F54040" />
                <stop offset="1" stopColor="#FE7171" />
              </linearGradient>
            </defs>
          </svg>
          <button>Products</button>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.95398 0.5L7.18881 4.30041H11.1848L7.95197 6.64919L9.1868 10.4496L5.95398 8.10081L2.72116 10.4496L3.95599 6.64919L0.723169 4.30041H4.71915L5.95398 0.5Z" fill="url(#paint0_linear_3051_38999)" />
            <defs>
              <linearGradient id="paint0_linear_3051_38999" x1="11.454" y1="11.5" x2="-1.57866" y2="7.93891" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F54040" />
                <stop offset="1" stopColor="#FE7171" />
              </linearGradient>
            </defs>
          </svg>
          <button>Pricing</button>
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.95398 0.5L7.18881 4.30041H11.1848L7.95197 6.64919L9.1868 10.4496L5.95398 8.10081L2.72116 10.4496L3.95599 6.64919L0.723169 4.30041H4.71915L5.95398 0.5Z" fill="url(#paint0_linear_3051_38999)" />
            <defs>
              <linearGradient id="paint0_linear_3051_38999" x1="11.454" y1="11.5" x2="-1.57866" y2="7.93891" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F54040" />
                <stop offset="1" stopColor="#FE7171" />
              </linearGradient>
            </defs>
          </svg>
          <button>Contact</button>
        </div>
        <div className="flex gap-2 lg:gap-5">
          {username === '' ?
            <button className="font-[600] bg-[#ffffff] rounded-[100px] py-[10] px-[24px] w-[97px] h-[56px] border border-[#1a1a1a]">Login</button>
            :
            <button className="font-[600] bg-[#ffffff] rounded-[100px] py-[10] px-[24px] w-fit h-[56px] border border-[#1a1a1a]">My Accounts</button>
          }
          {!props.showCart ?
            <>
              {username === '' &&
                <PrimaryButton2 text="Try for Free" />
              }
            </>
            :
            <div className="w-[56px] h-[56px] flex justify-center items-center rounded-[64px] bg-white hover:cursor-pointer">
              <div className="text-2xl relative text-[#1A1A1A]">
                <HiOutlineShoppingCart />
                {cart.length > 0 && <div className=" flex flex-col justify-center items-center absolute top-[-6px] right-[-6px] border border-white bg-[#F54040] text-white w-4 h-4 rounded-full font-[600] text-[8px] " >{cart.length}</div>}
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;