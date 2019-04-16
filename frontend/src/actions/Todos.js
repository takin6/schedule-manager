import { INIT_TODOS, INCREMENT_COUNT, DECREMENT_COUNT } from '../constants/TodoActionTypes';

export function initTodos(todos) {
  return {
    type: INIT_TODOS,
    todos
  };
}

export function incrementCount(number) {
  return {
    type: INCREMENT_COUNT,
    number
  };
}

export function decrementCount(number) {
  return {
    type: DECREMENT_COUNT,
    number
  };
}
