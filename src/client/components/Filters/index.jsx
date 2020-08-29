import React, { useEffect } from 'react';
import { chunk } from 'lodash';
import cx from 'classnames';
import './style.scss';

const Filters = props => {
  const {
    filters,
    onFilterChange,
    className,
    disabled,
    selectedFilters
  } = props;
  const isSelected = (value, filter) => {
    let selected = false;
    // Object.keys(selectedFilters).map(key => {
    //   if (selectedFilters[filter] && selectedFilters[key] === value)
    //     selected = true;
    // });
    const keyArr = Object.keys(selectedFilters);
    for (let i = 0; i < keyArr.length; i++) {
      if (keyArr[i] === filter && selectedFilters[keyArr[i]] === value) {
        selected = true;
        break;
      }
    }
    return selected;
  };
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
                          key={option.label}
                          className={cx('filter-option', {
                            selected: isSelected(
                              option.value,
                              filter.filterParam
                            )
                          })}
                          onClick={changeFilter(
                            filter.filterParam,
                            option.value
                          )}
                        >
                          {option.label}
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
