import api from '../pearsonUsersApi';
describe('PersonUserApi Test', () => {
  test('Api Get - return 10 user at a time', () => {
    expect.assertions(1);
    return api.getPearsonUsers().then(data => {
      const {
        data: { data: RES }
      } = data;
      expect(RES).toHaveLength(10);
    });
  });
});
