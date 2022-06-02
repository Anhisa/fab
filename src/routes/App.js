import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AccountDetails } from '../pages/AccountDetails';

import { useTheme } from '../hooks/useTheme';


export const App = () => {


  return (
   
      <BrowserRouter>
        <Routes>
          <Route
            path="/diplomacia-digital"
            element={<Home />}
          />
          <Route
            path={`/diplomacia-digital/:account`}
            element={<AccountDetails />}
          />
        </Routes>
      </BrowserRouter>
   
  );
};
