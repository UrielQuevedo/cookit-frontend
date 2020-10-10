import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import AddComment from '../components/Recipe/add-coment';
import Recipe from '../views/Recipes/recipe';

configure({ adapter: new Adapter() })

const idRecipe = 1;
const mockSetComments = jest.fn();

describe('AddComment', () => { 
  it('AddComment - se verifica que el comentario se inicie en vacio', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<AddComment idRecipe={idRecipe} setComments={mockSetComments} onSubmit={onSubmit}/>)
    const comment = wrapper.find({ 'data-testid': 'comment' })

    expect(comment.text()).toBe('');
  })
  
  it('AddComment - se verifica que no se llama al metodo onSubmit', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<AddComment idRecipe={idRecipe} setComments={mockSetComments} onSubmit={onSubmit}/>)

    expect(onSubmit).toHaveBeenCalledTimes(0);
  })

  it('AddComment - se verifica que se llame al metodo onSubmit para agregar un comentario', () => {
    const myComment = 'muy buena receta';
    const onSubmit = jest.fn();
    const wrapper = shallow(<AddComment idRecipe={idRecipe} setComments={mockSetComments} onSubmit={onSubmit}/>)
    const comment = wrapper.find({ 'data-testid': 'comment' })

    comment.simulate('change', { 
      target: {
        value: myComment
      }
    })

    wrapper.update();

    wrapper.find({ 'data-testid': 'addCommentForm' }).simulate('submit', {
      preventDefault: () => {},
    });
  
    expect(onSubmit).toHaveBeenCalledTimes(1);
  })

  it('AddComment - se verifica que despues de llamar al metodo onSubmit, se limpia el comentario', () => {
    const myComment = 'muy buena receta';
    const onSubmit = jest.fn();
    const wrapper = shallow(<AddComment idRecipe={idRecipe} setComments={mockSetComments} onSubmit={onSubmit}/>)
    const comment = wrapper.find({ 'data-testid': 'comment' })

    comment.simulate('change', { 
      target: {
        value: myComment
      }
    })

    wrapper.update();

    wrapper.find({ 'data-testid': 'addCommentForm' }).simulate('submit', {
      preventDefault: () => {},
    });
  
    expect(comment.text()).toBe('');
  })
})