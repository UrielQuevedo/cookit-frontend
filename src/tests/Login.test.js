import React, { useContext } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { login } from '../service/auth-service';
import Login from '../views/Login/login';
import waitForExpect from 'wait-for-expect';
import { act } from 'react-dom/test-utils';
import * as AuthContext from 'context/auth-context';

configure({ adapter: new Adapter() });

jest.mock('../service/auth-service');
jest.mock('../context/auth-context');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}));

test('Un usuario no se logea correctamente', async () => {
  login.mockImplementation(() => {
    throw new Error('Los datos ingresados no coinciden');
  });

  const contextValues = {
    authState: jest.fn(),
    setAuth: jest.fn()
  };

  jest
    .spyOn(AuthContext, 'useAuthContext')
    .mockImplementation(() => contextValues);

  const wrapper = shallow(<Login />);

  await act(async () => {
    wrapper.find({ 'data-testid': 'login-form' }).simulate('submit', {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    });
  });

  await waitForExpect(() => {
    wrapper.update();
    const error = wrapper.find({ 'data-testid': 'login-error' });
    expect(error.text()).toBe('Los datos ingresados no coinciden');
  });
});
