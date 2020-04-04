import React from 'react';
import { shallow } from 'enzyme'
import WelcomeScreen from '../../../components/welcome-screen';

let welcomeScreen;

describe('components/welcome-screen', () => {

    beforeAll(() => {
        welcomeScreen = shallow(<WelcomeScreen />)
    })
    it('renders properly', () => {
        expect(welcomeScreen).toMatchSnapshot();
    })
})