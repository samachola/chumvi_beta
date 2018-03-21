import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ViewRecipe } from '../../../components/pages/modals/ViewRecipe';

Enzyme.configure({ adapter: new Adapter() });

describe('<ViewRecipe />', () => {
  const props = {
    recipe: {
            'category_id': 1,
            'title': 'recipe title',
            'ingredients': 'recipe title',
            'steps': 'recipe title',
            'id': 23
        }
  }

  it('should render itself without crashing', () => {
  shallow(<ViewRecipe {...props}/>).dive();
  });
});