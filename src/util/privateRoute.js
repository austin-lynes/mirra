import React from "react"
import { Route, Redirect } from "react-router-dom"
import TimeoutScreen from "../components/timeout-screen";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const accessToken = localStorage.getItem('_access')
    console.log('accessToken', accessToken)
    return (
        <Route
            {...rest}
            render={props => (
                accessToken ?
                    (<Component {...props} />) :
                    (<Redirect to='/' />)
            )}
        />)

}

export default PrivateRoute
