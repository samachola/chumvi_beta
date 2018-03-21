import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ViewCategory } from '../../../components/pages/modals/viewCategory';

Enzyme.configure({ adapter: new Adapter() });

describe('<ViewCategory />', () => {
  const props = {
    category: {
            'category_description': 'test category description',
            'category_name': 'category name',
            'id': 23
        }
  }

  it('should render itself without crashing', () => {
  shallow(<ViewCategory {...props}/>).dive();
  });
});