import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Dashboard } from '../../components/pages/DashboardPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<Dashboard />', () => {
  const store = configureMockStore([thunk])({
    isAuthenticated: jest.fn,
    logout: jest.fn(),
  });

  const props = {
    isAuthenticated: true,
    logout: jest.fn()
  }

  it('should render itself without crashing', () => {
  shallow(<Provider store={store}><Dashboard {...props}/></Provider>).dive();
  });
});