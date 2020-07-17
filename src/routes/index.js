import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import React from "react";
import { isAuth } from "../services/api";
import BaseApp from "./baseApp";
import Admin from "../layouts/admin";
import Login from "../layouts/login";
import Register from "../layouts/register";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuth()) {
                    return <Component {...props}></Component>;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        ></Redirect>
                    );
                }
            }}
        />
    );
};

export default function App() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/">
                    <Redirect to="app/home" />
                </PrivateRoute>
                <PrivateRoute path="/app" component={BaseApp} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
}
