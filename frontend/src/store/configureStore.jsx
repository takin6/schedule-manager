import { reducers } from "../reducers/";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
// import api from "../middleware/Api";

export function configureStore(initialState = {}) {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    applyMiddleware(
      thunk,
      logger
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(
        combineReducers({
          ...(require('../reducers').reducers),
        }),
      );
    });
  }

  return store;
}