import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddCategory } from '../../../components/pages/modals/addCategory';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddCategory />', () => {
  const props = {
    addCategoryRequest: jest.fn(),
  }
  
  it('should render itself without crashing', () => {
  shallow(<AddCategory {...props}/>).dive();
  });
});