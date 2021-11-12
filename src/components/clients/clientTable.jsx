import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getClients } from "../../services/fakeClientService";

class ClientTable extends Component {
  state = {
    columns: ["Name", "Tax ID", "Address", "Phone", ""],
    clients: [],
  };

  componentDidMount() {
    this.setState({ clients: getClients() });
  }

  handleDelete = (id) => {
    let clients = [...this.state.clients];
    clients = clients.filter((client) => client.id !== id);
    this.setState({ clients });
  };

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              {this.state.columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
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
                  <Link className="btn btn-primary" to={`${client.id}`}>
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(client.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ClientTable;
