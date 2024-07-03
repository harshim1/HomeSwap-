// App.js

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Adjust the path as per your project structure
import './App.css';
import LandingPage from './components/LandingPageComponent/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
