import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MainComponent } from '../../components/Todos/Today/OverdueTasks/MainComponent';
import {
  deleteTodo,
  uncompleteTodo,
  rescheduleTodo
} from '../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    overdueTodos: state.todoReducers.today_todos.filter(todo => todo.completed === false && new Date() > new Date(todo.formatted_due_day)),
  };
};

const mapDispatchToProps = {
  uncompleteTodo: uncompleteTodo,
  deleteTodo: deleteTodo,
  rescheduleTodo: rescheduleTodo
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
