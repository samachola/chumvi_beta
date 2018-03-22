import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DeleteRecipe } from '../../../components/pages/modals/DeleteRecipe';

Enzyme.configure({ adapter: new Adapter() });

describe('<DeleteRecipe />', () => {
  const props = {
    deleteRecipeRequest: jest.fn(),
    recipe: {
                'title': 'test category description',
                'ingredients': 'category name',
                'id': 23,
                'category_id': 2,
                'step': 'The steps'
            }
  }

  it('should render itself without crashing', () => {
  shallow(<DeleteRecipe {...props}/>).dive();
  });
});