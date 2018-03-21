import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RecipePage } from '../../components/pages/RecipePage';

Enzyme.configure({ adapter: new Adapter() });

describe('<RecipePage />', () => {
  const props = {
    getRecipesRequest: jest.fn(() => Promise.resolve('stuff worked')),
    recipes: [
        {
            category_id: 24,
            id: 36,
            ingredients: 'Maize, Chilli powder',
            steps: 'Boil Maize, add chilli, enjoy',
            title: 'chai boiled'
        }
    ],
    categories: [
        {
            'category_description': 'test category description',
            'category_name': 'category name',
            'id': 23
        }
    ],
    page: 1,
    pages: 1,
    search: '',
  }

  it('should render itself without crashing', () => {
  shallow(<RecipePage {...props}/>);
  });
});