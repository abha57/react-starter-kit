import types from './types';

const initialState = {
    cuisines: [],
    loading: false,
    error: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CUISINES: {
            return {
                ...state,
                loading: true,
                cuisines: []
            }
        }
        case types.CUISINES_SUCCESS: {
            const { cuisines } = action.payload;
            return {
                ...state,
                loading: false,
                cuisines
            }
        }
        case types.CUISINES_ERROR: {
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                cuisines: [],
                error
            }
        }

        case types.SET_CUISINES: {
            const { cuisines } = action.payload;
            return {
                ...state,
                cuisines
            }
        }
    
        default:
            return initialState;
    }
};


export default reducer;