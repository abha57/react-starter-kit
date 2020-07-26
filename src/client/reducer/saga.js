import { takeLatest, put, call } from 'redux-saga/effects';
import types from './types';
import actions from './actions';

const fetchLeftPanel = async () => {
  const resp = await fetch('https://api.github.com/users/supreetsingh247');
  const data = await resp.json();
  return data;
};

const fetchRightPanel = async () => {
  const resp = await fetch(
    'https://api.github.com/users/supreetsingh247/repos'
  );
  const data = await resp.json();
  return data;
};

const makeApiCall = api =>
  new Promise((resolve, reject) => {
    fetch(api)
      .then(res => {
        return res.json();
      })
      .then(data => {
        return resolve(data);
      });
  });

const apiPromisesData = () => {
  const apiCalls = [];

  //   apiCalls.push(
  //     makeApiCall('https://api.github.com/users/supreetsingh247'),
  //     makeApiCall('https://api.github.com/users/supreetsingh247/repos')
  //   );
  apiCalls.push(fetchLeftPanel(), fetchRightPanel());
  return Promise.all(apiCalls);
  //   const [leftPanelData, ]
  // return makeApiCall('https://api.github.com/users/supreetsingh247');
  //   return new Promise((resolve, reject) => {
  //     fetch('https://api.github.com/users/supreetsingh247')
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(data => {
  //         return resolve(data);
  //       });
  //   });
};
function* fetchPanelSagaWorker() {
  try {
    // const leftPanelData = yield call(apiPromisesData);
    const [leftPanelData, rightPanelData] = yield call(apiPromisesData);
    yield put(
      actions.panelDataSuccess({
        leftPanelData,
        rightPanelData
      })
    );
  } catch (error) {
    yield put(actions.panelDataError(error));
  }
}
export function* fetchPanelSaga() {
  yield takeLatest(types.FETCH_PANELS, fetchPanelSagaWorker);
}
