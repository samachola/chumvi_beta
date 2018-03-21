import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter} from 'react-router-dom';
import { LoginForm } from '../../components/forms/LoginForm';

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
describe('<LoginForm />', () => {
  it('should render itself and subcomponents and change state', () => {
    const { enzymeWrapper } = setup(LoginForm);
    expect(enzymeWrapper.find('input').length).toEqual(3);
    enzymeWrapper.find('input').at(1).simulate('change', { target: { name: 'email', value: 'kasolo@mail.com' } });
  });
});

describe('<LoginForm/>', () => {
  it('should login a user', () => {
    const { enzymeWrapper } = setup(LoginForm);
    enzymeWrapper.setState({
      data: {
        email: 'kasolo@mail.com',
        password: '123Abc.1',
      }
    });
    enzymeWrapper.find('#submit').simulate('submit');
    expect(enzymeWrapper.instance().onSubmit).toHaveBeenCalled;
  });
});