import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import qs from 'querystring';
import actions from './actions';
import types from './types';
import { selectors } from './reducer';
import { mapUrlFilters } from '../utils';

const url = 'https://api.spacexdata.com/v3/launches';
const loadData = async filterParams => {
  const response = await fetch(`${url}?${filterParams}`);
  const data = await response.json();
  return data;
};

function* fetchDataWorker() {
  const { filters } = yield select(selectors.getState);
  const mappedFilters = mapUrlFilters(filters);
  const urlFilters = qs.stringify(mappedFilters);
  try {
    const data = yield call(loadData, urlFilters);
    yield put(actions.dataSuccess(data));
    yield put(actions.enableFilters());
  } catch (error) {
    yield put(actions.dataError(error));
    yield put(actions.enableFilters());
  }
}

function* saga() {
  yield takeLatest(types.DATA_LOADING, fetchDataWorker);
}

export default function* rootSaga() {
  yield all([saga()]);
}
