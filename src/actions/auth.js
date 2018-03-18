import { USER_LOGGED_IN } from '../types/types';
import api from '../api/api';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const loginRequest = credentials => dispatch =>{
  api.user.login(credentials).then(user => {
    dispatch(userLoggedIn(user));
  });
}
    