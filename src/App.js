import React, { useState } from "react";


// MIRRA UI 
import { connect } from "react-redux";


//ROUTER 
import { Route } from "react-router-dom";

//ASYNC STUFF
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

import Router from "./Router";

function App(props) {
  const { auth } = props;

  const LoadingIndicator = (props) => {

    const { promiseInProgress } = usePromiseTracker();

    return (
      promiseInProgress &&
      <div className="loading-indicator">
        <Loader className="item" type="MutatingDots" color="white" height="100" width={100} />
      </div>
    )

  }

  return (
    <div className="view">
      <div className="drag-bar" />
      <LoadingIndicator />
      <Router />
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
