import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  loading: false,
  todos: [],
  error: null
};

function findItemIndex(state, todoId) {
  return state.todos.findIndex((todo) => todo.id === todoId);
}

function updateTodoList(state, itemIndex, updatedItem) {
  return [
    ...state.todos.slice(0, itemIndex),
    updatedItem,
    ...state.todos.slice(itemIndex + 1)
  ];
}

export function todoReducers(state = INITIAL_STATE, action) {
  var editItemIndex, updatedItem;

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
    case types.EDIT_TODO_TITLE:
      editItemIndex = findItemIndex(state, action.payload);
      updatedItem = { ...state.todos[editItemIndex], editing: true};
      // updatedItem = Object.assign(
      //   state.todos[editItemIndex],
      //   {'title': action.payload.title, 'editing': true}
      // );
      return {
        ...state,
        todos: updateTodoList(state, editItemIndex, updatedItem)
      };
    case types.CANCEL_EDIT_TODO_TITLE:
      editItemIndex = findItemIndex(state, action.payload);
      updatedItem = { ...state.todos[editItemIndex], editing: false };
      return {
        ...state,
        todos: updateTodoList(state, editItemIndex, updatedItem)
      };
    case types.DONE_EDIT_TODO_TITLE:
      editItemIndex = findItemIndex(state, action.payload.id);
      updatedItem = { ...state.todos[editItemIndex], title: action.payload.title, editing: false };
      return {
        ...state,
        todos: updateTodoList(state, editItemIndex, updatedItem)
      };
    case types.DELETED_TODO:
      return {
        ...state,
        loading: false,
        error: null,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
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