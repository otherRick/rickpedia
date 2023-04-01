import React from 'react';
import { shallow } from 'enzyme';
import Characters from './';

describe('Characters component', () => {
  const props = {
    name: 'John Doe',
    image: 'https://example.com/image.jpg'
  };

  it('renders the component', () => {
    const wrapper = shallow(<Characters {...props} />);
    expect(wrapper.find('.char-card')).toHaveLength(1);
  });

  it('renders the name', () => {
    const wrapper = shallow(<Characters {...props} />);
    expect(wrapper.find('h3').text()).toEqual(props.name);
  });

  it('renders the image', () => {
    const wrapper = shallow(<Characters {...props} />);
    expect(wrapper.find('img').prop('src')).toEqual(props.image);
    expect(wrapper.find('img').prop('alt')).toEqual(props.name);
    expect(wrapper.find('img').prop('width')).toEqual(150);
    expect(wrapper.find('img').prop('height')).toEqual(150);
  });
});
