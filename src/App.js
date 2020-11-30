import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import Paperbase     from './components/Layer'
import Documentation from './components/Documentation'

import { theme }  from './constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Paperbase>
          <Documentation/>
        </Paperbase>
    </ThemeProvider>
  );
}

export default App;
