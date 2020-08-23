import React from 'react';
import { chunk } from 'lodash';
import './style.scss';

const Filters = props => {
  const { filters, onFilterChange, className, disabled, resetFilter } = props;
  const changeFilter = (filterParam, filterValue) => () => {
    if (disabled) return;
    onFilterChange({
      filterParam,
      filterValue
    });
  };
  return (
    <>
      <div className={className}>
        <div className="filter-options">
          <h3>Filters</h3>
          {filters &&
            filters.map(filter => (
              <div className="filter-row" key={filter.title}>
                <div className="title">{filter.title}</div>
                {filter.options &&
                  chunk(filter.options, 2).map((filterOptions, index) => (
                    <div className="filter-option-row" key={index}>
                      {filterOptions.map(option => (
                        <button
                          key={option.value}
                          className="filter-option"
                          onClick={changeFilter(
                            filter.filterParam,
                            option.value
                          )}
                        >
                          {option.value}
                        </button>
                      ))}
                    </div>
                  ))}
              </div>
            ))}
          <div className="reset-filter">
            <button className="reset-option" onClick={resetFilter}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filters;
