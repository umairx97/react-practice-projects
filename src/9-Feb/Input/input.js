import React from "react";
import "./input.css";

const Input = props => {
  const { type, value, id, name, label, errors, placeholder, onChange } = props;
  return (
    <div className="inputContainer">
      <div className="inputWrapper">
        <label htmlFor={id}>
          {label}

          <input
            type={type}
            placeholder={placeholder}
            value={value}
            id={id}
            name={name}
            onChange={ev => onChange && onChange(ev)}
          />
          {errors && errors.errorsObj[name] && (
            <div className="errpr-wrapper">
              <p className="error">{errors.errorsObj[name].message}</p>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default Input;
