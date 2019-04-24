import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  loading: false,
  todos: [],
  error: null
};

function setState(state, payload) {
  return { todos: payload };
}

export function todoReducers(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.INIT_TODOS:
      return setState(state, action.todos);
    case types.ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      };
    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload]
      };
    case types.ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

