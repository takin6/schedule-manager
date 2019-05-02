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

export function postTodo(title, dueDay) {
  let params = {
    todo: {
      title: title,
      due_day: dueDay
    }
  };

  return function(dispatch) {
    dispatch(requestTodo());
    return axios.post('http://localhost:3000/api/todos', params)
      .then(response => 
        dispatch(receivedTodo(response.data))
      )
      .catch(error =>
        console.log('An error occured. ', error)
      );
  };
}
