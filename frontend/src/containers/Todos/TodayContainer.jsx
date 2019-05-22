import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MainComponent } from '../../components/Todos/Today/MainComponent';
import { 
  postTodo,
  editTodoTitle,
  cancelEditTodoTitle,
  doneEditTodoTitle,
  deleteTodo,
  handleAddingMode,
  completeTodo
} from '../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    uncompletedTodos: state.todoReducers.today_todos.filter(todo => todo.completed === false && new Date() < new Date(todo.formatted_due_day)),
  };
};

const mapDispatchToProps = {
  createTodo: postTodo,
  handleAddingMode: handleAddingMode,
  editTodoTitle: editTodoTitle,
  cancelEditTodoTitle: cancelEditTodoTitle,
  doneEditTodoTitle: doneEditTodoTitle,
  deleteTodo: deleteTodo,
  completeTodo: completeTodo
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
