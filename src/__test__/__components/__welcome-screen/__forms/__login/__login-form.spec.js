import React from "react";
import { shallow } from "enzyme"
import LoginForm from "../../../../../components/welcome-screen/forms/login";

let loginForm;

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const mockReducer = (state = { open: {}, }, action) => {
    switch (action.payload) {
        default:
            return state;
    }
}

const MockApp = () => {

    const test_store = createStore(mockReducer, applyMiddleware(logger));

    return (
        <Provider store={test_store}>
            <LoginForm />
        </Provider>
    )
}


describe("components/side-rail", () => {

    beforeAll(() => {
        loginForm = shallow(<MockApp/>)
    })
    it("renders properly", () => {
        expect(loginForm).toMatchSnapshot();
    })
})