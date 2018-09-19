import {
  GET_PEARSON_USER,
  GET_PEARSON_USER_SUCCESS,
  GET_PEARSON_USER_FAILURE,
  DELETE_PEARSON_USER
} from '../../constants/pearsonUsersConstants';

import {
  getPearsonUsers,
  getPearsonUsersSuccess,
  getPearsonUsersFailure,
  deletePearsonUser
} from '../pearsonUsersActions';

describe('pearsonUsersAction', () => {
  it('getPearsonUsers - should return correctly', () => {
    const expectedResult = {
      type: GET_PEARSON_USER
    };
    expect(getPearsonUsers()).toEqual(expectedResult);
  });
  it('getPearsonUsersSuccess - should return correctly', () => {
    const expectedResult = {
      type: GET_PEARSON_USER_SUCCESS,
      data: []
    };
    expect(getPearsonUsersSuccess([])).toEqual(expectedResult);
  });
  it('getPearsonUsersFailure - should return correctly', () => {
    const expectedResult = {
      type: GET_PEARSON_USER_FAILURE,
      error: new Error('some error')
    };
    expect(getPearsonUsersFailure(new Error('some error'))).toEqual(
      expectedResult
    );
  });
  it('deletePearsonUsers - should return correctly', () => {
    const expectedResult = {
      type: DELETE_PEARSON_USER,
      data: []
    };
    expect(deletePearsonUser([])).toEqual(expectedResult);
  });
});
