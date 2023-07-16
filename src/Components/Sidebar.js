import React from "react";

export default function Sidebar(props) {
  const handleClose = () => {
    props.setSideToggle(false);
  };
  const username = '';

  return (
    <div>
      <div
        className="flex flex-col justify-between items-center text-[#1A1A1A] bg-white w-screen fixed"
        style={{ height: "calc(100vh - 80px)", zIndex: '997' }}
      >
        <div className=" w-[100vw] text-[16px] ">
          <button
            className=" py-[22px] pl-[20px] w-full text-left font-medium"
            onClick={() => {
              handleClose();
            }}
          >
            About us
          </button>
          <hr className="ml-[20px]" />
          <button
            className=" py-[22px] pl-[20px] w-full text-left font-medium "
            onClick={() => {
              handleClose();
            }}
          >
            Products
          </button>
          <hr className="ml-[20px]" />

          <button
            className=" py-[22px] pl-[20px] w-full text-left font-medium "
            onClick={() => {
              handleClose();
            }}
          >
            Pricing
          </button>
          <hr className="ml-[20px]" />

          <button
            className=" py-[22px] pl-[20px] w-full text-left font-medium "
            onClick={() => {
              handleClose();
            }}
          >
            Contact
          </button>
          <hr className="ml-[20px]" />
        </div>
        {username === '' && <div className="mb-[32px]">
          <button
            className="bg-white w-[90vw] h-[48px] border border-[#1A1A1A] text-[16px] font-medium  rounded-[100px]"
            style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)' }}
            onClick={() => { handleClose() }}
          >
            Login
          </button>
        </div>}
      </div>
    </div>
  );
}
