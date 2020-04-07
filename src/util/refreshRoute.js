import React from "react"
import { Route, Redirect } from "react-router-dom"
import TimeoutScreen from "../components/timeout-screen";
import PrivateRoute from "./privateRoute";

const RefreshRoute = ({ component: Component, ...rest }) => {
    const refreshToken = localStorage.getItem('_refresh')
    console.log('refreshToken', refreshToken);
    return (
        <Route
            {...rest}
            render={props => (
                refreshToken ?
                    (<Component {...props} />) :
                    (<Redirect to='/dashboard-timeout' />)
            )}
        />)

}

export default RefreshRoute
