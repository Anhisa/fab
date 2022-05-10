import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AccountDetails } from '../pages/AccountDetails';

function App() {
  return (
      <Routes>
        <Route path="/diplomacia-digital" element ={<Home />} />
        <Route path="/diplomacia-digital/:account" element ={<AccountDetails />} />
      </Routes>
  );
}

export default App;
