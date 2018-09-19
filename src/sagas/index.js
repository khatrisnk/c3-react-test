import { all, fork } from 'redux-saga/effects';
import { getPearsonUsersSaga } from './pearsonUsersSaga';

export default function* rootSaga() {
  yield all([fork(getPearsonUsersSaga)]);
}
