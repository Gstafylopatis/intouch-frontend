import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ClientForm from "./clientForm";

const ClientFormWrapper = () => {
  const { id } = useParams();
  return (
    <React.Fragment>
      <Outlet />
      <ClientForm id={id} />
    </React.Fragment>
  );
};

export default ClientFormWrapper;
