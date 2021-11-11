import React from "react";
import Form from "./common/form";
import { getClient } from "../services/fakeClientService";

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
      console.log(data);
      if (data === undefined) throw new Error("Does not Exist");
      this.setState({ data });
    } catch (e) {
      alert(e);
    }
  }

  render() {
    return <form>{this.renderInput("name", "name")}</form>;
  }
}

export default ClientForm;
