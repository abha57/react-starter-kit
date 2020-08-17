import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import rootSaga from './redux/saga';
import reducer, { initialState } from './redux/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
