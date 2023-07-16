import React from "react";

function PrimaryButton2(props) {
  const style = {
    background: props.color,
    width: props.width,
    height: props.height,
    color: props.textColor,
    padding:props.padding
  };
  return (
    <button
      text={props.text}
      type={props.type}
      disabled={props.isDisabled}
      onClick={props.onClick}
      className="btn-PrimaryButton2 font-medium rounded-full"
      style={style}
    >
      {props.text}
    </button>
  );
}
PrimaryButton2.defaultProps = {
  text: "Button",
  isDisabled: false,
  color: "linear-gradient(285.28deg, #f54040 0%, #fe7171 100%)",
  type: "button"
};

export default PrimaryButton2;
