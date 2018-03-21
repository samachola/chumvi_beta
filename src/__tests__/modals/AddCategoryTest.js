import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter} from 'react-router-dom';
import { AddCategory } from '../../components/pages/modals/addCategory';

Enzyme.configure({ adapter: new Adapter() });

function setup(Func) {
  const addCategoryRequest = jest.fn();
  const props = {
    addCategoryRequest
  };

  const enzymeWrapper = mount(<MemoryRouter ><Func {...props} /></MemoryRouter>);

  return {
    props,
    enzymeWrapper
  };
}
describe('<AddCategory />', () => {
  it('should render itself and subcomponents and change state', () => {
    const { enzymeWrapper } = setup(AddCategory);
    expect(enzymeWrapper.find('input').length).toEqual(2);
    enzymeWrapper.find('input').at(1).simulate('change', { target: { name: 'category_name', value: 'fruits' } });
    enzymeWrapper.find('textarea').at(1).simulate('change', { target: { name: 'category_description', value: 'awesome fruits' } });
  });
});

describe('<AddCategory/>', () => {
  it('should add a new category', () => {
    const { enzymeWrapper } = setup(AddCategory);
    enzymeWrapper.setState({
      data: {
        category_name: 'fruits',
        category_description: 'awesome fruits',
      }
    });
    enzymeWrapper.find('#submit').simulate('submit');
    expect(enzymeWrapper.instance().onSubmit).toHaveBeenCalled;
  });
});