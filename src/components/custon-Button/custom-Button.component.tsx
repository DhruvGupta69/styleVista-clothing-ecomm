import React, { MouseEventHandler } from "react";
import "./custom-Button.styles.scss";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
  isGoogleSignIn?: boolean;
  children: React.ReactNode;
  inverted?: boolean;
}

const CustomButton: React.FC<Props> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`
      ${inverted ? "inverted" : ""}
      ${isGoogleSignIn ? "google-sign-in" : ""}
      custom-button
    `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
