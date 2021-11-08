import { Route, Routes } from 'react-router-dom';

import Clients from './components/Clients';
import ClientForm from './components/clientForm';
import Layout from './components/layout';
import Home from './components/home';

import './App.css';

function App() {
  return (
    <main className='container'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='clients' element={<Clients />} />
          <Route path='clients/:id' element={<ClientForm />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
