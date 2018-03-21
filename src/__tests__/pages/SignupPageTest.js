import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { SignupPage } from '../../components/pages/SignupPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignupPage />', () => {
  const store = configureMockStore([thunk])({
    newuser: {}
  });

  const props = {
    signup: jest.fn(),
    history: { push: jest.fn()},
  };
  it('should render itself without crashing', () => {
    shallow(<Provider store={store}><SignupPage {...props} /></Provider>).dive();
  });
});