import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Paperbase from './components/Layer';
import Documentation from './components/Documentation'
import Error from './components/Error/Error'
import { theme } from './constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router>
        <Paperbase>
          <Switch>
            <Route exact path='/events'
              render={(props) => (
                <Documentation {...props} source={'events.json'} />
              )} />
            <Route path="/" component={Error} />
          </Switch>
        </Paperbase>
      </Router>

    </ThemeProvider>
  );
}

export default App;
