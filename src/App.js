import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Paperbase from "./components/Layer";
import Documentation from "./components/Documentation";
import Error from "./components/Error/Error";
import { theme } from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Paperbase>
          <Switch>
            <Route
              exact
              path="/activity"
              render={(props) => (
                <Documentation {...props} source={"activities.json"} />
              )}
            />
            <Route
              exact
              path="/city-tour"
              render={(props) => (
                <Documentation {...props} source={"city-tours.json"} />
              )}
            />
            <Route
              exact
              path="/geojson"
              render={(props) => (
                <Documentation {...props} source={"geojson.json"} />
              )}
            />
            <Route
              exact
              path="/user"
              render={(props) => (
                <Documentation {...props} source={"users.json"} />
              )}
            />
            <Route
              exact
              path="/authentication"
              render={(props) => (
                <Documentation {...props} source={"authentication.json"} />
              )}
            />
            <Route path="/" component={Error} />
          </Switch>
        </Paperbase>
      </Router>
    </ThemeProvider>
  );
}

export default App;
