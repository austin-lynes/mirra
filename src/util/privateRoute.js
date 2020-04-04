import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {

    const r_token = localStorage.getItem("refreshToken");
    const t_token = localStorage.getItem("timeoutToken")
  
    return (<Route
        {...rest}
        render={props => (
            r_token ?
                (<Component {...props} />) :
                (<Redirect to="/timeout" />)
        )}
    />)

}

export default PrivateRoute

/*
1584286392845
1584286398201


1585958029
*/