import * as types from '../constants/ActionTypes';
import { ENDPOINT } from '../constants/Api';
import axios from 'axios';

export function initTodos(todos) {
  return {
    type: types.INIT_TODOS,
    todos
  };
}

export const addTodo = ({ title, userId }) => {
  return (dispatch, getState) => {
    dispatch(addTodoStarted());

    console.log('current state:', getState());

    axios
      .post(ENDPOINT + "/api/todos.json", {
        title,
        userId,
        completed: false
      })
      .then(res => {
        setTimeout(() => {
          dispatch(addTodoSuccess(res.data));
        }, 2500);
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

const addTodoSuccess = todo => ({
  type: types.ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

const addTodoStarted = () => ({
  type: types.ADD_TODO_STARTED
});

const addTodoFailure = error => ({
  type: types.ADD_TODO_FAILURE,
  payload: {
    error
  }
});

// export function incrementCount(number) {
//   return {
//     type: INCREMENT_COUNT,
//     number
//   };
// }

// export function decrementCount(number) {
//   return {
//     type: DECREMENT_COUNT,
//     number
//   };
// }
