import React from "react";
import "./custom-Button.styles.scss";

const CustomButton = (props: any) => {
  return <button className="custom-button">{props.children}</button>;
};

export default CustomButton;
