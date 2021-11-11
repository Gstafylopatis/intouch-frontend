import { Route, Routes } from "react-router-dom";

import Clients from "./components/clients";
import Layout from "./components/layout";
import Home from "./components/home";

import "./App.css";

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clients/*" element={<Clients />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
