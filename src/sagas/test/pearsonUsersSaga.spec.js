import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_PEARSON_USER,
  GET_PEARSON_USER_SUCCESS,
  GET_PEARSON_USER_FAILURE,
  DELETE_PEARSON_USER
} from '../../constants/pearsonUsersConstants';
import {
  getPearsonUsersSuccess,
  getPearsonUsersFailure,
  deletePearsonUser
} from '../../actions/pearsonUsersActions';

import { getPearsonUsers } from '../pearsonUsersSaga';

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

describe.only('getPearsonUsersSaga', () => {
  let getPearsonUserGenerator;
  beforeEach(() => {
    getPearsonUserGenerator = getPearsonUsers();
    getPearsonUserGenerator.next();
  });
  it('Should dispatch getPearsonUserSuccess action for success response', () => {
    const response = {
      data: usersList
    };
    const putDescriptor = getPearsonUserGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getPearsonUsersSuccess(usersList)));
  });
  it('Should dispatch getPearsonUsersFailure action for error response', () => {
    const error = new Error('some error');
    getPearsonUserGenerator.next(error);
    const putDescriptor = getPearsonUserGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(getPearsonUsersFailure(error)));
  });
});
