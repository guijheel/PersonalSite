import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider , createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider  theme={theme}>
    <App />
  </ThemeProvider >
      
  </React.StrictMode>,
  document.getElementById('root')
);
