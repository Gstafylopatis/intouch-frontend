import { Route, Routes } from 'react-router-dom';

import Clients from './components/Clients';
import ClientForm from './components/clientForm';
import './App.css';

function App() {
  return (
    <main className='container'>
      <Routes>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/clients/:id' element={<ClientForm/>}/>
      </Routes>
    </main>
  );
}

export default App;
