import React from 'react';
import { shallow } from 'enzyme';
import Slide from '../../components/Slide';
import slideData from '../seed/slideData';


test('should render a single slide correctly', () => {
    const wrapper = shallow(
        <Slide 
        data={slideData[0]}
        active={false} 
        />
    );
    expect(wrapper).toMatchSnapshot();
})

test('should render an active slide correctly', () => {
    const wrapper = shallow(
        <Slide 
        data={slideData[0]}
        active={true} 
        />
    );
    expect(wrapper).toMatchSnapshot();
})

test('should render slide without content correctly', () => {
    const wrapper = shallow(
        <Slide 
        data={slideData[1]}
        active={false} 
        />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Content').length).toBe(0);
})