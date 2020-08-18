import React, { Component } from "react";
import { theme } from "../../../utils/theme";
import { MuiThemeProvider } from "@material-ui/core";
import { MainPage } from "../../../pages/MainPage";
import { Route, Router, Switch } from "react-router";
import {browserHistory} from "../../../utils/history";

export class AppContainer extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Switch>
            <Route exact path="/main">
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}
