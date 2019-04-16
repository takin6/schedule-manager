import { reducers } from "../reducers/";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";

export function configureStore(initialState = {}) {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    applyMiddleware(
      createLogger()
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