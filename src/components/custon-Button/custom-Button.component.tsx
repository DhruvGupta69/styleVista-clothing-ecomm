import React, { MouseEventHandler } from "react";
import "./custom-Button.styles.scss";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
  isGoogleSignIn?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
