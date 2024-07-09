import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import NavigationBar from './components/NavigationBar';
import WorkSpace from './components/Workspace';
import {theme} from './color'
import LoadScriptWrapper from './components/LoadScriptWrappe';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <LoadScriptWrapper>
            <WorkSpace />
          </LoadScriptWrapper>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;