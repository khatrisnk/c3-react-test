import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  getPearsonUsers,
  deletePearsonUser
} from '../../actions/pearsonUsersActions';
import PearsonUsersComponent from '../../components/Pearson/PearsonUsers';

class PearsonUsers extends React.PureComponent {
  componentDidMount() {
    this.props.getPearsonUsers();
  }
  render() {
    return <PearsonUsersComponent {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    pearsonUsers: state.pearsonUsers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPearsonUsers: () => {
      dispatch(getPearsonUsers());
    },
    deletePearsonUser: data => {
      dispatch(deletePearsonUser(data));
    }
  };
};
PearsonUsers.propTypes = {
  pearsonUsers: PropTypes.array,
  getPearsonUsers: PropTypes.func,
  deletePearsonUser: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PearsonUsers);
