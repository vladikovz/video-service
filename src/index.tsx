import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "mobx-react";
import {AppStore} from "./stores/AppStore";
import {theme} from "./utils/theme";
import {MuiThemeProvider, StylesProvider} from "@material-ui/core";

const store = new AppStore();

ReactDOM.render(
    <Provider store={store}>
        <StylesProvider injectFirst={true}>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </StylesProvider>
    </Provider>,
    document.getElementById("root")
);
