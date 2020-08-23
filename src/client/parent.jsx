import React, { useState, useReducer, useEffect } from 'react';
import { withRouter } from 'react-router';
import qs from 'querystring';
import Filters from './components/Filters';
import Tiles from './components/Tiles';
import Loader from './components/Loader';
import ErrorComponent from './components/ErrorComponent';
import FILTERS from './filters';
import { mapUrlFilters } from './utils';
import './style.scss';

const Parent = props => {
  const { history, actions, state } = props;

  // state data
  const [fixedFilters, setFilters] = useState(FILTERS.filters);

  // hooks
  useEffect(() => {
    const { filters } = state;
    const urlFilters = mapUrlFilters(filters);
    makeApiCall(urlFilters);
  }, [state.filters]);

  const makeApiCall = async filters => {
    actions.disableFilters();
    actions.dataLoading();
    const urlFilters = qs.stringify(filters);
    history.push({
      pathname: '/',
      search: `?${urlFilters}`
    });
  };

  //actions
  const onFilterChange = filterObj => {
    actions.updateFilters(filterObj);
  };
  const onFilterReset = () => {
    actions.resetFilter();
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
          resetFilter={onFilterReset}
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
