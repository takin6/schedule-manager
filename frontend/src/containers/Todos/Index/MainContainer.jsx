import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MainComponent } from '../../../components/todos/MainComponent';
import { postTodo, handleAddingMode } from '../../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducers.todos,
  };
};

const mapDispatchToProps = {
  createTodo: postTodo,
  handleAddingMode: handleAddingMode
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);

