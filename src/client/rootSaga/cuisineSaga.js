import { takeEvery, put, call } from 'redux-saga/effects';
import types from '../rootReducer/types';
import actions from '../rootReducer/actions';


const fetchCuisines = async () => {
    try {
        const resp = await fetch('http://starlord.hackerearth.com/recipe');
    const data = await resp.json();
    return data;
    } catch(error) {
        throw new Error({
            error
        });
    }
    
}

function* cuisineWorker({ payload }) {
    try {
        const data = yield call(fetchCuisines);
        yield put(actions.cuisinesSuccess({ cuisines: data }));
    } catch(error) {
        yield put(actions.cuisinesError({ error }));
    }
};


export function* saga() {
    yield takeEvery(types.LOAD_CUISINES, cuisineWorker);
}