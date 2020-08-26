import React, { useState, useReducer, useEffect } from 'react';
import { withRouter } from 'react-router';
import qs from 'querystring';
import Filters from './components/Filters';
import Tiles from './components/Tiles';
import Loader from './components/Loader';
import ErrorComponent from './components/ErrorComponent';
import FILTERS from './filters';
import { mapUrlFilters, mapRevFilters } from './utils';
import './style.scss';

const Parent = props => {
  const { history, actions, state } = props;

  // state data
  const [fixedFilters, setFilters] = useState(FILTERS.filters);

  // hooks

  useEffect(() => {
    const {
      location: { search }
    } = history;
    let filters = qs.parse(search.substr(1));
    if (Object.keys(filters).length > 1) {
      filters = mapRevFilters(filters);
      actions.updateAllFilters(filters);
      const urlFilters = mapUrlFilters(filters);
      // const urlFilters = mapUrlFilters(filters);
      makeApiCall(urlFilters);
    }
  }, []);

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
    const { filterParam, filterValue } = filterObj;
    const { filters } = state;
    const urlFilters = mapUrlFilters({
      ...filters,
      [filterParam]: filterValue
    });
    makeApiCall(urlFilters);
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
          selectedFilters={filters}
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
