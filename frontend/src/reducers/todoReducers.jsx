import * as types from '../constants/TodoActionTypes';

const INITIAL_STATE = {
  todos: [],
};

function setState(state, payload) {
  return { todos: payload };
}

export function todoReducers(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.INIT_TODOS:
      return setState(state, action.todos);
    default:
      return state;
  }
}
