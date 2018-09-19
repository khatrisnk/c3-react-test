import {
  GET_PEARSON_USER,
  GET_PEARSON_USER_SUCCESS,
  GET_PEARSON_USER_FAILURE,
  DELETE_PEARSON_USER
} from '../constants/pearsonUsersConstants';

const pearsonUsersReducers = (state = [], { type, data, error }) => {
  switch (type) {
    case GET_PEARSON_USER:
      return null;
    case GET_PEARSON_USER_SUCCESS:
      return data.data;
    case GET_PEARSON_USER_FAILURE:
      return error;
    case DELETE_PEARSON_USER:
      return data;
    default:
      return state;
  }
};
export default pearsonUsersReducers;
