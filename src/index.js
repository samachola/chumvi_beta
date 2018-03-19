import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';
import setAuthorizationToken from './utils/setAuthorizationToken';



const store = createStore( rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

if(localStorage.token) {
  setAuthorizationToken(localStorage.token);
  const user = { token: localStorage.token };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
