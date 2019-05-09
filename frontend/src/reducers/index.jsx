import { todoReducers } from './todoReducers';
import { reducer as formReducer } from 'redux-form';
import { ENTITIES_SUCCESS } from '../constants/ActionTypes';

export const reducers = {
  todoReducers,
  form: formReducer.plugin({
    CreateTodoForm: (state, action) => {
      switch(action.type) {
        case ENTITIES_SUCCESS:
          var values = undefined;
          var fields = { 
            fields: {
              todoTitle: { touched: false },
              todoDueDay: { touched: false }
            }
          };
          window.alert("Created New Todo!");
          return { ...state, values, fields };
        default:
          return state;
      }
    }
  })
};
      