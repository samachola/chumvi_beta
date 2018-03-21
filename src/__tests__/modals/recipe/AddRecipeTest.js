import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AddRecipe } from '../../../components/pages/modals/addRecipe';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddRecipe />', () => {
  const props = {
    addRecipeRequest: jest.fn(),
    categories: [
        {
        'category_description': 'test category description',
        'category_name': 'category name',
        'id': 23
        }
    ]
  }
  
  it('should render itself without crashing', () => {
  shallow(<AddRecipe {...props}/>).dive();
  });
});