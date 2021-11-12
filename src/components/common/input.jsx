import React from "react";

const Input = ({ name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="{name}">{label}</label>
      <input id={name} name={name} className="form-control" {...rest} />
    </div>
  );
};

export default Input;
