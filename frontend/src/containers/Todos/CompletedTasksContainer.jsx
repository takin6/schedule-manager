import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MainComponent } from '../../components/Todos/Today/CompletedTasks/MainComponent';
import {
  deleteTodo,
  uncompleteTodo
} from '../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    completedTodos: state.todoReducers.today_todos.filter(todo => todo.completed === true),
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
