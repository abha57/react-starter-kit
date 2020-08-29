import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import rootSaga from './saga';
import reducer from './reducer';

export default preloadedState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
