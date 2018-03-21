import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { LoginPage } from '../../components/pages/LoginPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<LoginPage />', () => {
  const store = configureMockStore([thunk])({
    user: {}
  });

  const props = {
    loginRequest: jest.fn(),
    history: { push: jest.fn()},
  };
  it('should render itself without crashing', () => {
    shallow(<Provider store={store}><LoginPage {...props} /></Provider>).dive();
  });
});