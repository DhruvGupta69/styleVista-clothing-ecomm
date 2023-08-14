import React from "react";
import SignInComponent from "../../components/sign-In/sign-In.component";
import SignUpComponent from "../../components/sign-Up/sign-Up.component";
import "./signIn&signUp.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInComponent />
      <SignUpComponent />
    </div>
  );
};

export default SignInAndSignUp;
