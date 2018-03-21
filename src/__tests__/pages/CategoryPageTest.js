import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CategoryPage } from '../../components/pages/CategoryPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<CategoryPage />', () => {
  const props = {
    getCategoriesRequest: jest.fn(() => Promise.resolve('stuff worked')),
    categories: [
        {
            'category_description': 'test category description',
            'category_name': 'category name',
            'id': 23
        },
        {
            'category_description': 'test category description',
            'category_name': 'another name',
            'id': 24
        }
    ]
  }

  it('should render itself without crashing', () => {
  shallow(<CategoryPage {...props}/>);
  });
});