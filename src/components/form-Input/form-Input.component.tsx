import React from "react";
import "./form-Input.styles.scss";

const FormInput = (props: any) => {
  return (
    <div className="group">
      <input className="form-input" onChange={props.handleChange} {...props} />
      {props.label ? (
        <label
          className={`${props.value.length ? "shrink" : ""}form-input-label`}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
