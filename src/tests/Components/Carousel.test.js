import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../../components/Carousel';
import slideData from '../seed/slideData';


test('should build carousel correctly when data provided', async () => {
    const wrapper = shallow(<Carousel data={slideData}/>);   
    expect(wrapper).toMatchSnapshot();
}); 

test('should go next slide when clicked .carousel-controls__next', async () => {
    const wrapper = shallow(<Carousel data={slideData}/>);

    expect(wrapper.find('.carousel-controls__next').length).toBe(1);
    wrapper.find('.carousel-controls__next').simulate('click');
    expect(wrapper.state('activeItemIndex')).toBe(1);
}); 

test('should go prev slide when clicked .carousel-controls__prev', async () => {
    const wrapper = shallow(<Carousel data={slideData}/>);

    expect(wrapper.find('.carousel-controls__prev').length).toBe(1);
    wrapper.find('.carousel-controls__prev').simulate('click');
    expect(wrapper.state('activeItemIndex')).toBe(4);
});

test('should show controls when mouseEnter', async () => {
    const wrapper = shallow(<Carousel data={slideData}/>);
    
    expect(wrapper.find('.carousel').length).toBe(1);
    wrapper.setState({
        showControls: false
    });
    wrapper.update();
    wrapper.find('.carousel').simulate('mouseEnter');
    expect(wrapper.state('showControls')).toBe(true);
}); 

test('should go to slide 3 when clicked Indicator#3', async () => {
    const wrapper = shallow(<Carousel data={slideData}/>);
    
    expect(wrapper.find('.carousel-dots__dot').length).toBe(5);
    wrapper.setState({
        width: 1040
    });
    wrapper.update();
    wrapper.find('#dot-3').simulate('click');
    expect(wrapper.state('activeItemIndex')).toBe(3);
}); 

