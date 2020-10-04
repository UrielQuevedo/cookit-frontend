import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Seacher from '../components/Searcher/searcher'

configure({ adapter: new Adapter(), disableLifecycleMethods: false })

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Searcher', () => { 
  it('Buscador - inicialmente se inicia en vacio', () => {
    const wrapper = shallow(<Seacher />)
    const query = wrapper.find({ 'data-testid': 'query' })
    expect(query.text()).toBe('')
  }) 
})