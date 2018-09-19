import pearsonUsersReducer from '../pearsonUsersReducers';
import {
  getPearsonUsers,
  getPearsonUsersSuccess,
  getPearsonUsersFailure,
  deletePearsonUser
} from '../../actions/pearsonUsersActions';

describe('pearsonUsersReducer', () => {
  it('Should hanldle getPearsonUsers action correctly', () => {
    const expectedResult = null;
    expect(pearsonUsersReducer([], getPearsonUsers())).toEqual(expectedResult);
  });
  it('Should hanldle getPearsonUsersSuccess action correctly', () => {
    const data = {
      data: []
    };
    const expectedResult = [];
    expect(pearsonUsersReducer([], getPearsonUsersSuccess(data))).toEqual(
      expectedResult
    );
  });
  it('Should hanldle getPearsonUsersFailure action correctly', () => {
    const error = new Error('some error');
    expect(pearsonUsersReducer([], getPearsonUsersFailure(error))).toEqual(
      error
    );
  });
  it('Should hanldle deletePearsonUser action correctly', () => {
    const data = [];
    const expectedResult = [];
    expect(pearsonUsersReducer([], deletePearsonUser(data))).toEqual(
      expectedResult
    );
  });
});
