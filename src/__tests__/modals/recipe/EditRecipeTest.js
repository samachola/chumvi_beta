import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { EditRecipe } from '../../../components/pages/modals/EditRecipe';

Enzyme.configure({ adapter: new Adapter() });

describe('<EditRecipe />', () => {
  const props = {
    editRecipeRequest: jest.fn(),
    recipe: {
            'title': 'test category description',
            'ingredients': 'category name',
            'id': 23,
            'category_id': 2,
            'step': 'The steps'
    },
    categories: [
        {
        'category_description': 'test category description',
        'category_name': 'category name',
        'id': 23
        }
    ]
  }

  it('should render itself without crashing', () => {
  shallow(<EditRecipe {...props}/>).dive();
  });
});