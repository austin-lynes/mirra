import React from 'react';
import { shallow } from 'enzyme'
import DashboardScreen from '../../../components/dashboard-screen';

let dashboardScreen;

describe('components/welcome-screen', () => {

    beforeAll(() => {
        dashboardScreen = shallow(<DashboardScreen />)
    })
    it('renders properly', () => {
        const instance = dashboardScreen.instance();
        expect(instance).toMatchSnapshot();
    })
})