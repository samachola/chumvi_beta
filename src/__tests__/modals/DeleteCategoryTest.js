import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DeleteCategory } from '../../components/pages/modals/deleteCategory';

Enzyme.configure({ adapter: new Adapter() });

describe('<DeleteCategory />', () => {
  const props = {
    deleteCategoryRequest: jest.fn(),
    category: {
            'category_description': 'test category description',
            'category_name': 'category name',
            'id': 23
        }
  }

  it('should render itself without crashing', () => {
  shallow(<DeleteCategory {...props}/>).dive();
  });
});