import types from './types';

const actions = {
  fetchPanelData: () => ({
    type: types.FETCH_PANELS
  }),
  panelDataSuccess: data => {
    return {
      type: types.FETCH_PANEL_SUCCESS,
      payload: {
        data
      }
    };
  },
  panelDataError: error => ({
    type: types.FETCH_PANEL_ERROR,
    payload: {
      error
    }
  })
};

export default actions;
