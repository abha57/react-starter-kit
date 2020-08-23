import types from './types';
const actions = {
  updateFilters: filterObj => ({
    type: types.UPDATE_FILTER,
    payload: {
      filters: {
        ...filterObj
      }
    }
  }),
  disableFilters: () => ({
    type: types.DISABLE_FILTERS
  }),
  enableFilters: () => ({
    type: types.ENABLE_FILTERS
  }),
  dataLoading: () => ({
    type: types.DATA_LOADING
  }),
  dataSuccess: data => ({
    type: types.DATA_SUCCESS,
    payload: {
      data
    }
  }),
  dataError: error => ({
    type: types.DATA_ERROR,
    payload: {
      error
    }
  }),
  resetFilter: () => ({
    type: types.RESET_FILTER
  })
};

export default actions;
