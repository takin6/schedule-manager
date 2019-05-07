import * as types from '../constants/ActionTypes';
// import { ENDPOINT } from '../constants/Api';
import axios from 'axios';

export function initTodos(todos) {
  return {
    type: types.INIT_TODOS,
    payload: todos
  };
}

export const requestTodo = () => ({
  type: types.ENTITIES_REQUEST
});

export const receivedTodo = (json) => ({
  type: types.ENTITIES_SUCCESS,
  payload: json.todo
});

export const handleAddingMode = () => ({
  type: types.HANDLE_ADDING_MODE
}); 

export const deletedTodo = (json) => ({
  type: types.DELETED_TODO,
  payload: json.todo
});

export const editTodoTitle = (id) => ({
  type: types.EDIT_TODO_TITLE,
  payload: id
});

export const cancelEditTodoTitle = (id) => ({
  type: types.CANCEL_EDIT_TODO_TITLE,
  payload: id
});

export const receivedUpdateTodo = (json) => ({
  type: types.DONE_EDIT_TODO_TITLE,
  payload: json.todo
});

export function postTodo(title, dueDay) {
  let params = {
    todo: {
      title: title,
      due_day: dueDay
    }
  };

  return function(dispatch) {
    dispatch(requestTodo());
    return axios.post('/api/todos', params)
      .then(response =>
        dispatch(receivedTodo(response.data))
      )
      .catch(error =>
        console.log('An error occured. ', error)
      );
  };
}

export function doneEditTodoTitle(id, newTitle) {
  let params = {
    todo: {
      title: newTitle
    }
  };
  return function(dispatch) {
    dispatch(requestTodo());
    return axios.patch(`/api/todos/${id}`, params)
      .then(response => {
        console.log(response.data);
        dispatch(receivedUpdateTodo(response.data));
      })
      .catch(error => 
        console.log('An error occured. ', error)
      );
  };
}

export function deleteTodo(id) {
  return function(dispatch) {
    dispatch(requestTodo());
    return axios.delete(`/api/todos/${id}`)
      .then(response => {
        dispatch(deletedTodo(response.data));
      })
      .catch(error =>
        console.log('An error occured. ', error)
      );
  };
}
