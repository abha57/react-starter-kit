import { all } from 'redux-saga/effects';
import { saga as cuisineSaga } from './cuisineSaga';


function* rootSaga() {
    yield all([
        cuisineSaga()
    ])
};


export default rootSaga;