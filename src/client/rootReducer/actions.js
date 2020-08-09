import types from './types';


const actions = {
    fetchCuisines: (payload) => ({
        type: types.LOAD_CUISINES,
        payload
    }),
    cuisinesSuccess: (payload) => ({
        type: types.CUISINES_SUCCESS,
        payload
    }),
    cuisinesError: (payload) => ({
        type: types.CUISINES_ERROR,
        payload
    }),
    setCuisines: (payload) => ({
        type: types.SET_CUISINES,
        payload
    })
};


export default actions;