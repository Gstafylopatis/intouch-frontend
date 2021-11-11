import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = { data: {} };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }

  renderInput(name, label, type = "text") {
    const { data } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        onChange={this.handleChange}
      />
    );
  }
}
export default Form;
