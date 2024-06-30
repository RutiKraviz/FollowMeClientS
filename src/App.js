// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import NavigationBar from './components/NavigationBar';
import WorkSpace from './components/Workspace';
import {theme} from './color'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <WorkSpace />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;