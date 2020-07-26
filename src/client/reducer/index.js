import types from './types';

const initialState = {
  loading: false,
  error: null,
  leftPanel: {},
  rightPanel: []
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.FETCH_PANELS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_PANEL_ERROR: {
      const { error } = payload;
      return {
        ...state,
        loading: false,
        error,
        leftPanel: {},
        rightPanel: []
      };
    }
    case types.FETCH_PANEL_SUCCESS: {
      const { data } = payload;
      const { leftPanelData, rightPanelData } = data;
      return {
        ...state,
        loading: false,
        error: null,
        leftPanel: leftPanelData,
        rightPanel: rightPanelData
      };
    }

    default:
      return initialState;
  }
};

export default reducer;
