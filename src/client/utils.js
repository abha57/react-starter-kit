const filterTypesMapper = {
  limit: 'limit',
  landing: 'land_success',
  launch: 'launch_success',
  year: 'launch_year'
};

export const mapUrlFilters = filters => {
  const urlFilters = {};
  Object.keys(filters).map(filter => {
    if (filterTypesMapper[filter]) {
      urlFilters[filterTypesMapper[filter]] = filters[filter];
    }
  });
  return urlFilters;
};