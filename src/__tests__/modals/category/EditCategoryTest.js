import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EditCategory } from '../../../components/pages/modals/editCategory';

Enzyme.configure({ adapter: new Adapter() });

describe('<EditCategory />', () => {
  const props = {
    editCategoryRequest: jest.fn(),
    category: {
            'category_description': 'test category description',
            'category_name': 'category name',
            'id': 23
        }
  }

  it('should render itself without crashing', () => {
  shallow(<EditCategory {...props}/>).dive();
  });
});