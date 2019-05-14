import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MainComponent } from '../../components/Todos/Today/CompletedTasks/MainComponent';
import { 
  postTodo,
  editTodoTitle,
  cancelEditTodoTitle,
  doneEditTodoTitle,
  deleteTodo,
  handleAddingMode
} from '../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    completedTodos: state.todoReducers.today_todos.filter(todo => todo.completed === true),
  };
};

const mapDispatchToProps = {
  createTodo: postTodo,
  handleAddingMode: handleAddingMode,
  editTodoTitle: editTodoTitle,
  cancelEditTodoTitle: cancelEditTodoTitle,
  doneEditTodoTitle: doneEditTodoTitle,
  deleteTodo: deleteTodo
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
