import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_PEARSON_USER } from '../constants/pearsonUsersConstants';

import {
  getPearsonUsersSuccess,
  getPearsonUsersFailure
} from '../actions/pearsonUsersActions';

import api from '../api/pearsonUsersApi';

export function* getPearsonUsers() {
  try {
    const data = yield call(api.getPearsonUsers);
    yield put(getPearsonUsersSuccess(data.data));
  } catch (error) {
    yield put(getPearsonUsersFailure(error));
  }
}
export function* getPearsonUsersSaga() {
  yield takeLatest(GET_PEARSON_USER, getPearsonUsers);
}
