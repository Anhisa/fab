import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AccountDetails } from '../pages/AccountDetails';

import { useTheme } from '../hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/styledComponents/Themes';
import useGetAllData from '../hooks/useGetAllData';
import { DataContext } from '../context/dataContext';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';


export const App = () => {
  const [theme, themeToggler] = useTheme();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const allData = useGetAllData()

  useEffect(() => {
    console.log('me ejecute')
    if(Object.keys(allData).length > 0) {   
    setLoading(false)    
    }
  }
  , [allData]);
  if(loading) {
    return <Loading/>
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <DataContext.Provider value={allData}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/diplomacia-digital"
            element={<Home  themeToggler={ themeToggler} />}
          />
          <Route
            path={`/diplomacia-digital/:account`}
            element={<AccountDetails />}
          />
        </Routes>
      </BrowserRouter>
      </DataContext.Provider>
      </ThemeProvider>
  );
};
