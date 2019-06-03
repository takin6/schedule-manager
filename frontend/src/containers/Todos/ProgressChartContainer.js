import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import MainComponent from '../../components/Todos/Today/ProgressCharts/MainComponent';
import {
  deleteTodo,
  uncompleteTodo
} from '../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    completedTodos: state.todoReducers.today_todos.filter(todo => todo.completed === true),
    uncompletedTodos: state.todoReducers.today_todos.filter(todo => todo.completed === false && new Date() < new Date(todo.formatted_due_day)).sort(((a, b) => {
      if (new Date(a.formatted_due_day) <= new Date(b.formatted_due_day)) return -1;
      if (new Date(a.formatted_due_day) >= new Date(b.formatted_due_day)) return 1;
      return 0;
    })),
    overdueTodos: state.todoReducers.overdue_todos
  };
};

const mapDispatchToProps = {
  uncompleteTodo: uncompleteTodo,
  deleteTodo: deleteTodo
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);