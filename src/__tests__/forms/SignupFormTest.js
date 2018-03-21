import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter} from 'react-router-dom';
import { SignupForm } from '../../components/forms/SignupForm';

Enzyme.configure({ adapter: new Adapter() });

function setup(Func) {
  const submit = jest.fn(() => Promise.resolve('it works'));
  const props = {
    submit
  };

  const enzymeWrapper = mount(<MemoryRouter ><Func {...props} /></MemoryRouter>);

  return {
    props,
    enzymeWrapper
  };
}
describe('<SignupForm />', () => {
  it('should render itself and subcomponents and change state', () => {
    const { enzymeWrapper } = setup(SignupForm);
    expect(enzymeWrapper.find('input').length).toEqual(4);
    enzymeWrapper.find('input').at(1).simulate('change', { target: { name: 'email', value: 'kasolo@mail.com' } });
  });
});

describe('<SignupForm/>', () => {
  it('should login a user', () => {
    const { enzymeWrapper } = setup(SignupForm);
    enzymeWrapper.setState({
      data: {
        email: 'kasolo@mail.com',
        username: 'kasolo',
        password: '123Abc.1',
      }
    });
    enzymeWrapper.find('#submit').simulate('submit');
    expect(enzymeWrapper.instance().onSubmit).toHaveBeenCalled;
  });
});