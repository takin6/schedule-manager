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
  deleteTodo: deleteTodo
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);

