import React from 'react';
import PearsonUsersComponent from '../PearsonUsers';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

const usersList = [
  {
    id: 4,
    first_name: 'Eve',
    last_name: 'Holt',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
  },
  {
    id: 5,
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'
  },
  {
    id: 6,
    first_name: 'Tracey',
    last_name: 'Ramos',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'
  }
];

const usersListAfterDelete = [
  {
    id: 4,
    first_name: 'Eve',
    last_name: 'Holt',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
  },
  {
    id: 5,
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'
  }
];

const state = {
  userToAdd: [
    {
      id: 4,
      first_name: 'Eve',
      last_name: 'Holt',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
    }
  ]
};

describe('PearsonUsersComponent Sanpshots', () => {
  it('PearsonUsersComponent Sanpshot - with Loading... text', () => {
    const component = renderer.create(
      <PearsonUsersComponent pearsonUsers={[]} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('PearsonUsersComponent Sanpshot - with users list', () => {
    const component = renderer.create(
      <PearsonUsersComponent pearsonUsers={usersList} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('PearsonUsersComponent', () => {
  it('renders three <User /> components', () => {
    const wrapper = render(<PearsonUsersComponent pearsonUsers={usersList} />);
    expect(wrapper.find('.user')).toHaveLength(3);
  });
  it('renders one heading', () => {
    const wrapper = shallow(<PearsonUsersComponent pearsonUsers={usersList} />);
    const heading = (
      <h1 className="user-mgmt-heading">Pearson User Management</h1>
    );
    expect(wrapper.contains(heading)).toEqual(true);
  });
  it('renders Loading... when user list is empty', () => {
    const wrapper = shallow(<PearsonUsersComponent pearsonUsers={[]} />);
    expect(wrapper.find('.user-loader')).toHaveLength(1);
  });
  it('user method returns unique users', () => {
    const wrapper = mount(<PearsonUsersComponent pearsonUsers={usersList} />);
    expect(
      PearsonUsersComponent.getDerivedStateFromProps(wrapper.props(), state)
        .users
    ).toEqual(usersList);
  });
  it('deleteuser method delete one user from the userlist', () => {
    const e = {
      preventDefault: jest.fn()
    };
    const id = 6;
    const wrapper = mount(
      <PearsonUsersComponent
        pearsonUsers={usersList}
        deletePearsonUser={jest.fn()}
      />
    );
    expect(wrapper.instance().deleteUser(id, e)).toEqual(usersListAfterDelete);
  });
});
