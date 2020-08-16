import React, { useState, useReducer, useEffect } from 'react';
import { withRouter } from 'react-router';
import qs from 'querystring';
import Filters from './components/Filters';
import Tiles from './components/Tiles';
import Loader from './components/Loader';
import ErrorComponent from './components/ErrorComponent';
import FILTERS from './filters';

const types = {
  UPDATE_FILTER: 'UPDATE_FILTER',
  ENABLE_FILTERS: 'ENABLE_FILTERS',
  DISABLE_FILTERS: 'DISABLE_FILTERS',
  DATA_LOADING: 'DATA_LOADING',
  DATA_SUCCESS: 'DATA_SUCCESS',
  DATA_ERROR: 'DATA_ERROR'
};

const filterTypesMapper = {
  limit: 'limit',
  landing: 'land_success',
  launch: 'launch_success',
  year: 'launch_year'
};

const url = 'https://api.spacexdata.com/v3/launches';
const loadData = async filterParams => {
  const response = await fetch(`${url}?${filterParams}`);
  const data = await response.json();
  return data;
};

const mapUrlFilters = filters => {
  const urlFilters = {};
  Object.keys(filters).map(filter => {
    if (filterTypesMapper[filter]) {
      urlFilters[filterTypesMapper[filter]] = filters[filter];
    }
  });
  return urlFilters;
};

const initialState = {
  filters: {
    limit: 100
  },
  filtersDisabled: false,
  data: null,
  loading: false,
  error: null
};

const App = props => {
  const { history } = props;

  // state data
  const [fixedFilters, setFilters] = useState(FILTERS.filters);
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
  const [state, dispatch] = useReducer(reducer, initialState);

  // hooks
  useEffect(() => {
    const { filters } = state;
    const urlFilters = mapUrlFilters(filters);
    makeApiCall(urlFilters);
  }, []);

  useEffect(() => {
    const { filters } = state;
    const urlFilters = mapUrlFilters(filters);
    makeApiCall(urlFilters);
  }, [state.filters]);

  const makeApiCall = async filters => {
    dispatch({
      type: types.DISABLE_FILTERS
    });
    dispatch({
      type: types.DATA_LOADING
    });
    const urlFilters = qs.stringify(filters);
    history.push({
      pathname: '/',
      search: `?${urlFilters}`
    });
    try {
      const data = await loadData(urlFilters);
      dispatch({
        type: types.DATA_SUCCESS,
        payload: {
          data
        }
      });
      dispatch({
        type: types.ENABLE_FILTERS
      });
    } catch (error) {
      dispatch({
        type: types.DATA_ERROR,
        payload: {
          error
        }
      });
    }
  };

  //actions
  const onFilterChange = filterObj => {
    dispatch({
      type: types.UPDATE_FILTER,
      payload: {
        filters: {
          ...filterObj
        }
      }
    });
  };
  const { loading, error, data, filters, filtersDisabled } = state;
  return (
    <>
      <div className="container">
        <h1 className="header">SpaceX program launches</h1>
        <Filters
          className="filter"
          onFilterChange={onFilterChange}
          filters={fixedFilters}
          disabled={filtersDisabled}
        />
        <div className="tiles">
          {loading && <Loader />}
          {error && <ErrorComponent error={error} />}
          {data && <Tiles tiles={data} />}
        </div>
      </div>
    </>
  );
};

export default withRouter(App);
