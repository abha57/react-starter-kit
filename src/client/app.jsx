import React, { useState, useEffect } from 'react';

import data from './services';
import List from './components/List';
import Filters from './components/Filters';

const App = () => {
  const [masterData, setMasterData] = useState({});
  const [masterKeys, setMasterKeys] = useState([]);
  const 
  useEffect(() => {
    // async function fetchData() {
    //   return await masterData();
    // }
    const masterKeys = Object.keys(data.data[0]).map(key => key);
    setMasterKeys(masterKeys);
    setMasterData(data.data);
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="actions">
          <Filters inputProps={
            {
              value: 
            }
          }  filterProps={}/>
          <List headers={masterKeys} tableData={masterData} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
