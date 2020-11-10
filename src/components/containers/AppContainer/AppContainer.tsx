import React, {Component} from "react";
import {MainPage} from "../../../pages/MainPage";
import {Route, Router, Switch} from "react-router";
import {browserHistory} from "../../../utils/history";
import {inject, observer} from "mobx-react";
import {IStore} from "../../../interfaces/common/IStore";
import {computed} from "mobx";

@inject("store")
@observer
export class AppContainer extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!;
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path="/main">
                        <MainPage/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
