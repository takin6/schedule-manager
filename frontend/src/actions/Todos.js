import * as types from '../constants/ActionTypes';
// import { ENDPOINT } from '../constants/Api';
// import axios from 'axios';
import SearchCondition from '../forms/SearchCondition';

export function initTodos(todos) {
  return {
    type: types.INIT_TODOS,
    todos
  };
}

export const addTodo = (values) => {
  return (dispatch) => {
    const searchCondition = SearchCondition.fromForm(values);
    // axios.get(endpoint, {params: params})
    // APIを叩く代わりにalertする
    dispatch(searchSalon(searchCondition));
    alert(JSON.stringify(searchCondition.toAPI()));
  }
}
// export const addTodo = ({ title, time }) => {
//   return (dispatch, getState) => {
//     dispatch(addTodoStarted());

//     console.log('current state:', getState());

//     axios
//       .post(ENDPOINT + "/api/todos.json", {
//         title,
//         time,
//         completed: false
//       })
//       .then(res => {
//         setTimeout(() => {
//           dispatch(addTodoSuccess(res.data));
//         }, 2500);
//       })
//       .catch(err => {
//         dispatch(addTodoFailure(err.message));
//       });
//   };
// };

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
