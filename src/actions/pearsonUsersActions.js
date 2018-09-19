import {
  GET_PEARSON_USER,
  GET_PEARSON_USER_SUCCESS,
  GET_PEARSON_USER_FAILURE,
  DELETE_PEARSON_USER
} from '../constants/pearsonUsersConstants';

export function getPearsonUsers() {
  return {
    type: GET_PEARSON_USER
  };
}

export function getPearsonUsersSuccess(data) {
  return {
    type: GET_PEARSON_USER_SUCCESS,
    data
  };
}

export function getPearsonUsersFailure(error) {
  return {
    type: GET_PEARSON_USER_FAILURE,
    error
  };
}

export function deletePearsonUser(data) {
  return {
    type: DELETE_PEARSON_USER,
    data
  };
}
