import { Outlet, Route, Routes } from "react-router-dom";

import Clients from "./components/clients";
import ClientFormWrapper from "./components/clientFormWrapper";
import Layout from "./components/layout";
import Home from "./components/home";

import "./App.css";

function App() {
  return (
    <main className="container">
      <Routes>
        <Route index element={<Layout />} />
        <Route path="home" element={<Home />} />
        <Route path="clients" element={<Clients />}>
          <Route path=":id" element={<ClientFormWrapper />} />
        </Route>
      </Routes>
      <Outlet />
    </main>
  );
}

export default App;
