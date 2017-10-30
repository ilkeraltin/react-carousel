import React from 'react';
import { shallow } from 'enzyme';
import Content from '../../components/Content';
import slideData from '../seed/slideData';

test('should render content box correctly', () => {

    const wrapper = shallow(<Content data={slideData[0].content} />);

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('.carousel-content__title').text()).toBe('Africa');
    expect(wrapper.find('.price').text()).toBe('1179');
    expect(wrapper.find('.currency').text()).toBe('EUR');
})