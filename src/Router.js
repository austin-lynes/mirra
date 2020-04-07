import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import WelcomeScreen from "./components/welcome-screen"
import Dashboard from "./components/dashboard-screen";
import TimeoutScreen from './components/timeout-screen';

// util
import PrivateRoute from "./util/privateRoute";
import RefreshRoute from "./util/refreshRoute";

const Router = () => (
    <>
        <Route exact path="/" component={WelcomeScreen} />
        <PrivateRoute path="/dashboard-timeout" component={TimeoutScreen} />
        <RefreshRoute path="/dashboard" component={Dashboard} />
    </>

);

export default Router;