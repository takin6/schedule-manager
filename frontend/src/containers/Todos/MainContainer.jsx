import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MainComponent } from '../../components/Todos/MainComponent';
import { 
  postTodo,
  editTodoTitle,
  cancelEditTodoTitle,
  doneEditTodoTitle,
  deleteTodo,
  handleAddingMode,
  rescheduleTodo
} from '../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducers.todos,
  };
};

const mapDispatchToProps = {
  createTodo: postTodo,
  handleAddingMode: handleAddingMode,
  editTodoTitle: editTodoTitle,
  cancelEditTodoTitle: cancelEditTodoTitle,
  doneEditTodoTitle: doneEditTodoTitle,
  deleteTodo: deleteTodo,
  rescheduleTodo: rescheduleTodo
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);

