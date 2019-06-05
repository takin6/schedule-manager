import * as React from 'react';
import { renderReact } from 'hypernova-react';
import PropTypes from 'prop-types';
import { configureStore } from "../store/configureStore";
import { initTodos } from '../actions/Todos';
const TodoComponent = require('./Todos/TodoComponent').TodoComponent;
const store = configureStore();
import 'react-dates/initialize';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})),
};

function createClass(component, init) {
  class Todo extends React.Component {
    constructor(props) {
      super(props);
      if (init) {
        store.dispatch(initTodos(this.props.arg));
      }
    }

    render() {
      return component;
    }
  }

  Todo.propTypes = propTypes;

  return Todo;
}

export default renderReact(
  'Todo',
  createClass(<TodoComponent store={store}/>, true),
);

if (module.hot) {
  module.hot.accept("./Todos/TodoComponent", () => {
    const NewTodoComponent = require('./Todos/TodoComponent').TodoComponent;
    renderReact(
      createClass(<NewTodoComponent store={store}/>, false),
    );
  });
}
