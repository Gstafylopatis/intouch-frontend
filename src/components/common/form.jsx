import React, { Component } from "react";

class Form extends Component {
  state = { data: {} };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }

  renderInput(name, label, type = "text") {
    return (
      <label>
        {name}:<input type={type} name={name} value={this.state.data[name]} />
      </label>
    );
  }
}
export default Form;
