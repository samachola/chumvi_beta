import user from '../../reducers/user';

describe('Users reducers changes state on', () => {
  it('has a default state', () => {
    expect(user(undefined, { type: 'unexpected' }))
      .toEqual({});
  }),
  it('change state on user login', () => {
    const results =
        {
          user: [{ token: '23dfaf333vfdff32' }],
          type: 'USER_LOGGED_IN',
        };
    expect(user(null, results))
      .toEqual([{ token: '23dfaf333vfdff32' }]);
  }),
  it('change state on user signup', () => {
    const results =
        {
          newuser: [{ username: 'achola', email: 'test@mail.com', password: 'TestP@55' }],
          type: 'USER_REGISTRATION_SUCCESS',
        };
    expect(user(null, results))
      .toEqual([{ username: 'achola', email: 'test@mail.com', password: 'TestP@55' }]);
  }),
  it('change state on user logout', () => {
    const results =
        {
          user: [{ token: '23dfaf333vfdff32' }],
          type: 'USER_LOGGED_OUT',
        };
    expect(user(null, results))
      .toEqual({});
  })
});