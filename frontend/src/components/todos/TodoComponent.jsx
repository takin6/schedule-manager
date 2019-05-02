if (!global._babelPolyfill) {
  require('babel-polyfill');
}
import * as React from 'react';
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';
import MainContainer from '../../containers/Todos/Index/MainContainer';
import PropTypes from 'prop-types';

export class TodoComponent extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <AppContainer>
          <MainContainer />
        </AppContainer>
      </Provider>
    );
  }
}

TodoComponent.propTypes = {
  store: PropTypes.shape({})
};

