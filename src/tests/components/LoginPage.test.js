import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('shoulde correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});