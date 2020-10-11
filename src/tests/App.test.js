import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from 'components/app';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('App levanta', () => {
    shallow(<App />);
  });
});
