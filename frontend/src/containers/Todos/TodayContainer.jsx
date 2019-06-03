import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MainComponent } from '../../components/Todos/Today/MainComponent';
import { 
  postTodo,
  editTodoTitle,
  cancelEditTodoTitle,
  doneEditTodoTitle,
  deleteTodo,
  completeTodo,
  rescheduleTodo
} from '../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    uncompletedTodos: state.todoReducers.today_todos.filter(todo => todo.completed === false && new Date() < new Date(todo.formatted_due_day)).sort(((a, b) => {
      if (new Date(a.formatted_due_day) <= new Date(b.formatted_due_day)) return -1;
      if (new Date(a.formatted_due_day) >= new Date(b.formatted_due_day)) return 1;
      return 0;
    }))
  };
};

const mapDispatchToProps = {
  createTodo: postTodo,
  editTodoTitle: editTodoTitle,
  cancelEditTodoTitle: cancelEditTodoTitle,
  doneEditTodoTitle: doneEditTodoTitle,
  deleteTodo: deleteTodo,
  completeTodo: completeTodo,
  rescheduleTodo: rescheduleTodo
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
