import React from 'react';
import unionBy from 'lodash/unionBy';
import memoize from 'memoize-one';
import User from '../common/User';
import './PearsonUsers.css';

export default class PearsonUsers extends React.PureComponent {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = {
      users: [
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
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'
        },
        {
          id: 6,
          first_name: 'Tracey',
          last_name: 'Ramos',
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'
        }
      ]
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.pearsonUsers && props.pearsonUsers.length) {
      return {
        users: unionBy(props.pearsonUsers, state.users, 'id')
      };
    }
    return null;
  }

  /**
   * Todo: Instead of using getDerived state from props
   * use memoize users list for better performance
   *
   * The static users list available in the state will not
   * be available for production ready code.
   *
   * Not using it to just demonstrate the ask for time being
   */
  users = memoize((currentPropsUser, currentStateUser) => {
    if (currentPropsUser && currentPropsUser.length) {
      return unionBy(currentPropsUser, currentStateUser, 'id');
    }
    return [];
  });

  deleteUser(id, e) {
    e.preventDefault();
    let users = this.state.users.filter(user => {
      return user.id !== id;
    });
    this.props.deletePearsonUser(users);
    this.setState({
      users
    });
    return users;
  }

  render() {
    if (!this.props.pearsonUsers || !this.props.pearsonUsers.length) {
      return <div className="user-loader">Loading...</div>;
    }
    return (
      <div className="pearson-users">
        <div className="container row">
          <h1 className="user-mgmt-heading">Pearson User Management</h1>
        </div>
        <div className="user-container container row">
          {this.state.users.map(user => {
            return (
              <User key={user.id} deleteUser={this.deleteUser} {...user} />
            );
          })}
        </div>
      </div>
    );
  }
}
