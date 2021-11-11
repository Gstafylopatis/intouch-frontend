import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ClientFormWrapper from "./clientFormWrapper";
import ClientTable from "./clientTable";

class Clients extends Component {
  render() {
    return (
      <Routes>
        <Route index element={<ClientTable />} />
        <Route path=":id" element={<ClientFormWrapper />} />
      </Routes>
    );
  }
}

export default Clients;
