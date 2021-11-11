import React from "react";
import Form from "../common/form";
import { getClient, saveClient } from "../../services/fakeClientService";

class ClientForm extends Form {
  state = {
    data: { id: "", name: "", tax_id: "", address: "", phone: "" },
  };

  async componentDidMount() {
    await this.getClientData();
  }

  async getClientData() {
    //Try to read client id from props
    try {
      const client_id = this.props.id;
      if (client_id === "new") return;
      const data = await getClient(client_id);
      if (data === undefined) throw new Error("Does not Exist");
      this.setState({ data });
    } catch (e) {
      alert(e);
    }
  }

  doSubmit = async () => {
    await saveClient(this.state.data);
    this.props.navigate("/clients");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("name", "name")}
        {this.renderInput("tax_id", "Tax ID")}
        {this.renderInput("address", "Address")}
        {this.renderInput("phone", "Phone Number")}
        {this.renderButton("Submit")}
      </form>
    );
  }
}

export default ClientForm;
