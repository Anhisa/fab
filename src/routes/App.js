import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AccountDetails } from '../pages/AccountDetails';

import { useTheme } from '../hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/styledComponents/Themes';


export const App = () => {
  const [theme, themeToggler] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
      </ThemeProvider>
  );
};
