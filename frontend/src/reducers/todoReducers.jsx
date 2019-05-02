import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  loading: false,
  todos: [],
  error: null
};

export function todoReducers(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.INIT_TODOS:
      return {
        ...state,
        todos: action.payload.todos
      };
    case types.HANDLE_ADDING_MODE:
      return {
        ...state,
        addingMode: state.addingMode && state.addingMode === true ? false : true 
      };
    case types.ENTITIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.ENTITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}

// case types.ADD_TODO_FAILURE:
//   return {
//     ...state,
//     loading: false,
//     error: action.payload.error
//   };