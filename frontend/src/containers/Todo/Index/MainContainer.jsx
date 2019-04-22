import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MainComponent } from '../../../components/todos/MainComponent';
import { addTodo } from '../../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducers.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        onAddTodo: todo => {
          return dispatch(addTodo(todo));
        }
      },
      dispatch
    )
    // onAddTodo: todo => {
    //   dispatch(addTodo(todo));
    // }
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators(
//       {
//         incrementCount,
//         decrementCount,
//       },
//       dispatch,
//     ),
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);

