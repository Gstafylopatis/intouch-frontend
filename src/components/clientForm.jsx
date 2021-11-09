import React, { Component } from 'react';

class ClientForm extends Component {
  state = {
    name: '',
    tax_id: '',
    address: '',
    phone: '',
  };

  handleChange = (event) => {
    const field = event.target.name;
    this.setState({ [field]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Tax ID:
          <input
            type='text'
            name='tax_id'
            value={this.state.tax_id}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type='text'
            name='address'
            value={this.state.address}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type='text'
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' name='submit' />
      </form>
    );
  }
}

export default ClientForm;
