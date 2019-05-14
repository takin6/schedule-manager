import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  loading: false,
  todos: [],
  today_todos: [],
  overdue_todos: [],
  tomorrow_todos: [],
  due_undefined_todos: [],
  error: null
};

function findItemIndex(todos, todoId) {
  return todos.findIndex((todo) => todo.id === todoId);
}

function updateTodoList(state, itemIndex, updatedItem) {
  return [
    ...state.todos.slice(0, itemIndex),
    updatedItem,
    ...state.todos.slice(itemIndex + 1)
  ];
}

function updateTodayTodoList(state, itemIndex, updatedItem) {
  return [
    ...state.today_todos.slice(0, itemIndex),
    updatedItem,
    ...state.today_todos.slice(itemIndex + 1)
  ];
}

export function todoReducers(state = INITIAL_STATE, action) {
  var editItemIndex, editTodayItemIndex, updatedItem, updatedTodayItem;

  switch(action.type) {
    case types.INIT_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
        today_todos: action.payload.today_todos,
        overdue_todos: action.payload.overdue_todos,
        tomorrow_todos: action.payload.tomorrow_todos,
        due_undefined_todos: action.payload.due_undefined_todos,
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
        todos: [...state.todos, action.payload],
        today_todos: [...state.today_todos, action.payload]
      };
    case types.EDIT_TODO_TITLE:
      editItemIndex = findItemIndex(state.todos, action.payload);
      updatedItem = { ...state.todos[editItemIndex], editing: true};
      // updatedItem = Object.assign(
      //   state.todos[editItemIndex],
      //   {'title': action.payload.title, 'editing': true}
      // );
      editTodayItemIndex = findItemIndex(state.today_todos, action.payload.id);
      updatedTodayItem = { ...state.today_todos[editTodayItemIndex], editing: true};
      return {
        ...state,
        todos: updateTodoList(state, editItemIndex, updatedItem),
        today_todos: updateTodayTodoList(state, editTodayItemIndex, updatedTodayItem)
      };
    case types.CANCEL_EDIT_TODO_TITLE:
      editItemIndex = findItemIndex(state.todos, action.payload);
      updatedItem = { ...state.todos[editItemIndex], editing: false };
      editTodayItemIndex = findItemIndex(state.today_todos, action.payload.id);
      updatedTodayItem = { ...state.today_todos[editTodayItemIndex], editing: true};
      return {
        ...state,
        todos: updateTodoList(state, editItemIndex, updatedItem),
        today_todos: updateTodayTodoList(state, editTodayItemIndex, updatedTodayItem),
      };
    case types.DONE_EDIT_TODO_TITLE:
      editItemIndex = findItemIndex(state.todos, action.payload.id);
      updatedItem = { ...state.todos[editItemIndex], title: action.payload.title, completed: action.payload.completed, editing: false };
      editTodayItemIndex = findItemIndex(state.today_todos, action.payload.id);
      updatedTodayItem = { ...state.today_todos[editTodayItemIndex], title: action.payload.title, completed: action.payload.completed, editing: false};
      return {
        ...state,
        todos: updateTodoList(state, editItemIndex, updatedItem),
        today_todos: updateTodayTodoList(state, editTodayItemIndex, updatedTodayItem),
      };
    case types.DELETED_TODO:
      return {
        ...state,
        loading: false,
        error: null,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        today_todos: state.today_todos.filter(todo => todo.id !== action.payload.id)
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