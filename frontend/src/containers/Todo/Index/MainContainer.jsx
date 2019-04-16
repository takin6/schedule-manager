import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MainComponent } from '../../../components/todos/MainComponent';
import { incrementCount, decrementCount } from '../../../actions/Todos';

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducers.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        incrementCount,
        decrementCount,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);