import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AccountDetails } from '../pages/AccountDetails';
import { useGetData } from '../hooks/useGetData';



const api = 'https://fundacionandresbello.local/wp-json/fab/v1/official-accounts';

export const App = () => {
  // const data = useGetData(api)
  // const item = data.data;
  // const accounts = item.map(item => (item.official_account))

  return (
    <Routes>
        <Route path="/diplomacia-digital" element={<Home />} />
        <Route path={`/diplomacia-digital/:accounts`} element ={<AccountDetails />} />
    </Routes>
  );
}


