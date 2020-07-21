import { createStore, applyMiddleware, compose, bindActionCreators } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware(rootSaga);
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);
sagaMiddleware.run(rootSaga);




export default store;