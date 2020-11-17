import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { login } from '../service/auth-service';
import { act } from 'react-dom/test-utils';
import waitForExpect from 'wait-for-expect';
import Login from '../views/Login/login';

configure({ adapter: new Adapter() });

jest.mock('../service/auth-service');

afterEach(() => {
  login.mockReset();
});

test('Un usuario no se logea correctamente', async () => {

  const result = {
    message: "Los datos ingresados no coinciden"
  };

  login.mockResolvedValue({ args: result });

  const AuthContext = React.createContext();
  const preventDefault = jest.fn()

  const wrapper = shallow(
    <AuthContext.Provider value="Provided Value">
      <Login />
    </AuthContext.Provider>
  );

  await act(async () => {
    wrapper.find({ 'data-testid': 'login-form' }).simulate('submit', {
      preventDefault: () => {}
    });
  });

  await waitForExpect(() => {
    const loginError = wrapper.find({ 'data-testid': 'login-error' });
    wrapper.update();
    expect(loginError.text()).toMatch("Los datos ingresados no coinciden");
  });
})