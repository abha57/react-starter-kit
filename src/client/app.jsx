import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import data from './services';
import List from './components/List';
import Filters from './components/Filters';

const App = () => {
  const [masterData, setMasterData] = useState({});
  const [masterKeys, setMasterKeys] = useState([]); 

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const newData = !_.isEmpty(masterData) && !_.isEmpty(searchValue) && masterData.filter((data) => data.restaurantName.toLowerCase().includes(searchValue));
    if(newData) {
      setMasterData(newData);
    } else {
      setMasterData(data.data);
    }
  }, [searchValue]);

  useEffect(() => {
    // async function fetchData() {
    //   return await masterData();
    // }
    const masterKeys = Object.keys(data.data[0]).map(key => key);
    setMasterKeys(masterKeys);
    setMasterData(data.data);
  }, []);

  const searchValueSet = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="actions">
          <Filters inputProps={
            {
              value: searchValue || '',
              name: 'searchByCuisine',
              textProps: {
                onChange: searchValueSet
              }
            }
          }/>
          <List headers={masterKeys} tableData={masterData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
