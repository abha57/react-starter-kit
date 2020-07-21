import { takeLatest } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import types from './types';
import actions from './actions';

const fetchLeftPanel = async () => {
    const resp = await fetch('https://api.github.com/users/supreetsingh247');
    const data = await resp.json();
    return data;
};

const fetchRightPanel = async () => {
    const resp = await fetch('https://api.github.com/users/supreetsingh247/repos');
    const data = await resp.json();
    return data;
};

const makeApiCall = (api) => new Promise((resolve, reject) => {
    fetch(api).then((res) => {
        console.log('json', res);
        return res.json();
    }).then((data) => {
        console.log('data', data);
        return resolve(data);
    });
})

const apiPromisesData = () => {
    // const apiCalls = [];
    // // apiCalls.push(fetchLeftPanel, fetchRightPanel);

    // apiCalls.push(makeApiCall('https://api.github.com/users/supreetsingh247'), makeApiCall('https://api.github.com/users/supreetsingh247/repos'))
    // return Promise.all(apiCalls);
    // return makeApiCall('https://api.github.com/users/supreetsingh247');
    return new Promise((resolve, reject) => {
    fetch('https://api.github.com/users/supreetsingh247').then((res) => {
        console.log('json', res);
        return res.json();
    }).then((data) => {
        console.log('data', data);
        return resolve(data);
    });
})
}
function* fetchPanelSagaWorker() {
    // const [leftPanelData, rightPanelData] = yield call(apiPromisesData);
    try{
        const leftPanelData = yield call(apiPromisesData);
        yield put(actions.panelDataSuccess({
            leftPanelData,
            rightPanelData
        }));
    } catch(error) {
        yield put(actions.panelDataError(error));
    }
}
export function* fetchPanelSaga() {
    yield takeLatest(types.FETCH_PANELS, fetchPanelSagaWorker);
}