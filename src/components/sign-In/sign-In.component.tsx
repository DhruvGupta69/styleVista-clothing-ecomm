import React from "react";
import FormInput from "../form-Input/form-Input.component";
import CustomButton from "../custon-Button/custom-Button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-In.styles.scss";

type signInState = {
  email: string;
  password: string;
};

class SignInComponent extends React.Component<{}, signInState> {
  state: signInState = {
    email: "",
    password: "",
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event: { target: { value: any; name: any } }) => {
    const newState = { [event.target.name]: event.target.value } as Pick<
      signInState,
      keyof signInState
    >;

    this.setState(newState);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign-In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
