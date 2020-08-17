import React from 'react';
import { chunk } from 'lodash';
import './style';

const Filters = props => {
  const { filters, onFilterChange, className, disabled } = props;
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
              <div className="filter-row">
                <div className="title">{filter.title}</div>
                {filter.options &&
                  chunk(filter.options, 2).map(filterOptions => (
                    <div className="filter-option-row">
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
        </div>
      </div>
    </>
  );
};
export default Filters;
