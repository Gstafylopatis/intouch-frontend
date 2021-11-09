import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  state = {
    clients: [
      {
        id: 1,
        name: 'george',
        tax_id: '123213213',
        address: 'latamias 38',
        phone: '123123',
      },
      {
        id: 2,
        name: 'antonis',
        tax_id: '232323232',
        address: 'latamias 42',
        phone: '657897',
      },
    ],
  };

  handleDelete = (id) => {
    let clients = [...this.state.clients];
    clients = clients.filter((client) => client.id !== id);
    this.setState({ clients });
  };

  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tax ID</th>
            <th>Address</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.tax_id}</td>
              <td>{client.address}</td>
              <td>{client.phone}</td>
              <td>
                <Link className='btn btn-primary' to={`/clients/${client.id}`}>
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => this.handleDelete(client.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Clients;
