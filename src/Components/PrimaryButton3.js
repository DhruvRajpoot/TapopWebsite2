import React, { useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const PrimaryButton3 = (props) => {
   const [isHover, setIsHover] = useState(false);

   const style = {
      background: props.color,
      color: props.textcolor,
      width: props.width,
      height: props.height,
      display: "flex",
      justifyContent: "center",
      boxShadow: isHover ? "0px 4px 16px rgba(0, 0, 0, 0.4)" : "none",
   }


   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

   return (
      <button
         type="button"
         disabled={props.isDisabled}
         className="btn-primary text-white font-medium rounded-full flex justify-center items-center"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={style}
      >
         {props.text}
         <span style={{ padding: "0" }}>{props.icon}</span>

      </button>
   );
};
PrimaryButton3.defaultProps = {
   text: "Continue",
   isDisabled: false,
   icon: <HiOutlineArrowSmRight />,
};

export default PrimaryButton3;
