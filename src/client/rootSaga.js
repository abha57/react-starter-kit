import { all } from 'redux-saga/effects';
import { fetchPanelSaga } from './reducer/saga';

export default function* rootSaga() {
  yield all([
    fetchPanelSaga()
  ]);
}