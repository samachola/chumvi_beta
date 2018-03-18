import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/types';
import api from '../api/api';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const userRegistered = (newuser) => ({
    type: USER_LOGGED_OUT,
    newuser
});



export const loginRequest = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.token = user.token;
    dispatch(userLoggedIn(user));
  });

  export const signup = credentials => dispatch =>
  api.user.register(credentials).then(newuser => {
    dispatch(userRegistered(newuser));
  });

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch(userLoggedOut());
};
  

    