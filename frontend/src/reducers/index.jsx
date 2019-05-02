import { todoReducers } from './todoReducers';
import { reducer as formReducer } from 'redux-form';

export const reducers = {
  todoReducers,
  form: formReducer
};