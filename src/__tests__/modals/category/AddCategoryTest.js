import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { AddCategory } from '../../../components/pages/modals/addCategory';

Enzyme.configure({ adapter: new Adapter() });

function setup(Func) {
  const submit = jest.fn(() => Promise.resolve('it works'));
  const props = {
    addCategoryRequest: jest.fn(),
    submit
  };

  const enzymeWrapper = mount(<MemoryRouter ><Func {...props} /></MemoryRouter>);

  return {
    props,
    enzymeWrapper
  };
}

describe('<AddCategory />', () => {
  const props = {
    addCategoryRequest: jest.fn(),
  }
  
  it('should render itself without crashing', () => {
  shallow(<AddCategory {...props}/>).dive();
  });
});

describe('<AddCategory />', () => {
  it('should add a new category', () => {
    const { enzymeWrapper } = setup(AddCategory);
    enzymeWrapper.setState({
      data: {
        category_name: 'food',
        category_description: 'awesome food'
      }
    });

    expect(enzymeWrapper.find('#submit').length).toEqual(0);
  });
  
});
