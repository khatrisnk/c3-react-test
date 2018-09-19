import React from 'react';
import UserComponent from '../User';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

const userProps = {
  first_name: 'Siddhartha',
  last_name: 'Khatri',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
  id: 7,
  deleteUser: jest.fn()
};

describe('UserComponent Sanpshots', () => {
  it('UserComponent Sanpshot - with all the props', () => {
    const component = renderer.create(<UserComponent {...userProps} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('UserComponent', () => {
  it('Simulate click event on delete link', () => {
    const wrapper = mount(<UserComponent {...userProps} />);
    wrapper.find('.user-delete').simulate('click');
    expect(wrapper.props().deleteUser).toHaveBeenCalled();
  });
  it('renders first name', () => {
    const wrapper = shallow(<UserComponent {...userProps} />);
    expect(wrapper.find('.user-first-name')).toHaveLength(1);
  });
  it('renders last name', () => {
    const wrapper = shallow(<UserComponent {...userProps} />);
    expect(wrapper.find('.user-last-name')).toHaveLength(1);
  });
  it('renders avatar', () => {
    const wrapper = shallow(<UserComponent {...userProps} />);
    expect(wrapper.find('.user-avatar')).toHaveLength(1);
  });
});
