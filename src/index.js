import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initialState, TableContext } from './context/TableContext';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter> 
      <TableContext.Provider value={initialState}>
        <App />
        </TableContext.Provider>  
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
