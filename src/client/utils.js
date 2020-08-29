const filterTypesMapper = {
  limit: 'limit',
  landing: 'land_success',
  launch: 'launch_success',
  year: 'launch_year'
};

const filterRevMapper = {
  limit: 'limit',
  land_success: 'landing',
  launch_success: 'launch',
  launch_year: 'year'
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
export const mapRevFilters = filters => {
  const newFilters = {};
  Object.keys(filters).map(filter => {
    if (filterRevMapper[filter]) {
      newFilters[filterRevMapper[filter]] = filters[filter];
    }
  });
  return newFilters;
};
