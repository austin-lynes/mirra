import React from "react";
import { shallow } from "enzyme"
import RegisterForm from "../../../../../components/welcome-screen/forms/register";

let registerForm;

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
            <RegisterForm />
        </Provider>
    )
}


describe("components/side-rail", () => {

    beforeAll(() => {
        registerForm = shallow(<MockApp/>)
    })
    it("renders properly", () => {
        expect(registerForm).toMatchSnapshot();
    })
})