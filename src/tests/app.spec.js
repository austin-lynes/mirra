import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { toBeInTheDocument } from '@testing-library/jest-dom';

//#region  MOCK
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const mockReducer = (state = { auth: {}, }, action) => {
    switch (action.payload) {
        default:
            return state;
    }
}

const MockApp = () => {

    const test_store = createStore(mockReducer, applyMiddleware(logger));

    return (
        <BrowserRouter>
            <Provider store={test_store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}
//#endregion

describe('src/app', () => {
    it('renders without crashing', () => {
        const view = shallow(<MockApp />);
        expect(view).toMatchSnapshot();
    })

    it('it has two buttons', () => {
        const { getAllByTestId } = render(<MockApp />);
        const buttons = getAllByTestId(/button/i);
        expect(buttons.length).toBe(2);
    })

    it('it has a welcome banner', () => {
        const { getByTestId } = render(<MockApp />);
        const welcome_msg = getByTestId(/welcome-banner/i);
        expect(welcome_msg.textContent).toBe("Welcome to Mirra!");
    })

})