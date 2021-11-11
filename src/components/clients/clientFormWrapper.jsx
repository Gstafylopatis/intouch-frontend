import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClientForm from "./clientForm";

const ClientFormWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ClientForm id={id} navigate={navigate} />
    </React.Fragment>
  );
};

export default ClientFormWrapper;
