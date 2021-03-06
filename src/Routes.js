import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Home from "./containers/Home";
import Login from "./containers/Login"

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            {/* Finally, catch all unmatched routes */}
            <Route exact path="/login">
                <Login />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
