import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from '../reducers';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/saga'
const defaultState = {
  
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, logger),
);

// CREATE STORE
const store = createStore(
  rootReducer,
  defaultState,
  enhancer
);
sagaMiddleware.run(rootSaga);

export default store;