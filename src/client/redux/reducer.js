import types from './types';
export const initialState = {
  filters: {
    limit: 100
  },
  filtersDisabled: false,
  data: null,
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.UPDATE_FILTER:
      const { filters } = action.payload;
      const { filterParam, filterValue } = filters;
      return {
        ...state,
        filters: {
          ...state.filters,
          [filterParam]: filterValue
        }
      };
    case types.ENABLE_FILTERS:
      return {
        ...state,
        filtersDisabled: false
      };
    case types.DISABLE_FILTERS:
      return {
        ...state,
        filtersDisabled: true
      };
    case types.DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
        data: null
      };
    }
    case types.DATA_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        data
      };
    }
    case types.DATA_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
        data: null
      };
    }
    default:
      return initialState;
  }
};

export const selectors = {
    getState: (state) => state
}

export default reducer;
