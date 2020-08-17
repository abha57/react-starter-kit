import React, { useState, useReducer, useEffect } from 'react';
import { withRouter } from 'react-router';
import qs from 'querystring';
import Filters from './components/Filters';
import Tiles from './components/Tiles';
import Loader from './components/Loader';
import ErrorComponent from './components/ErrorComponent';
import FILTERS from './filters';
import { mapUrlFilters } from './utils'; 


const Parent = props => {
  const { history, actions, state } = props;

  // state data
  const [fixedFilters, setFilters] = useState(FILTERS.filters);
//   const [state, dispatch] = useReducer(reducer, initialState);

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
    // dispatch({
    //   type: types.DISABLE_FILTERS
    // });
    // dispatch({
    //   type: types.DATA_LOADING
    // });
    actions.disableFilters();
    actions.dataLoading();
    const urlFilters = qs.stringify(filters);
    history.push({
      pathname: '/',
      search: `?${urlFilters}`
    });
    // try {
    // //   const data = await loadData(urlFilters);
    // //   dispatch({
    // //     type: types.DATA_SUCCESS,
    // //     payload: {
    // //       data
    // //     }
    // //   });
    // //   dispatch({
    // //     type: types.ENABLE_FILTERS
    // //   });
    // // actions.dataSuccess(data);
    // //   actions.enableFilters();
    // } catch (error) {
    // //   dispatch({
    // //     type: types.DATA_ERROR,
    // //     payload: {
    // //       error
    // //     }
    // //   });
    //   actions.dataError(error);
    // }
  };

  //actions
  const onFilterChange = filterObj => {
    // dispatch({
    //   type: types.UPDATE_FILTER,
    //   payload: {
    //     filters: {
    //       ...filterObj
    //     }
    //   }
    // });
    actions.updateFilters(filterObj)
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


export default withRouter(Parent);
