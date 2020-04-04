import React, { useState } from "react";


import WelcomeScreen from "./components/welcome-screen"
// MIRRA UI 
import { connect } from "react-redux";


//ROUTER 
import PrivateRoute from './util/privateRoute';
import { Route } from "react-router-dom";
import Dashboard from "./components/dashboard-screen";

//ASYNC STUFF
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App(props) {

  const { auth } = props;
  const { user_loggedIn } = auth;

  const LoadingIndicator = (props) => {

    const { promiseInProgress } = usePromiseTracker();
    
    return (
      promiseInProgress &&
      <div className='loading-indicator'>
        <Loader className='item' type="MutatingDots" color="white" height="100" width="100" />
      </div>
    )
  
  }

  return (
    <div data-testid='view' className="view">
      <div className="drag-bar" />
      <LoadingIndicator />
      <Route exact path='/' component={WelcomeScreen} />
      <PrivateRoute
        path='/dashboard'
        component={Dashboard} />

    </div>
  );
}


const _props = (store) => {
  return {
    auth: store.auth
  }
}
const _actions = {

}

export default connect(_props, _actions)(App);
