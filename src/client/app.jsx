import React, { useState } from 'react';
import readXlsxFile from 'read-excel-file';

import './style.scss';

import ExcelTable from './components/ExcelTable';
import Dropzone from './components/Dropzone';
const excelSchema = {
  mobile: {
    prop: 'mobile',
    type: Number
  },
  earning_id: {
    prop: 'id',
    type: Number
  },
  earning: {
    prop: 'earning',
    type: Number
  }
};

const App = () => {
  const [data, setData] = useState([]);
  const [approvals, setApprovals] = useState([]);
  const [rejects, setRejects] = useState(null);
  const onAction = data => {
    console.log('data from modal', data);
  };
  const onFileUpload = file => {
    readXlsxFile(file, { excelSchema }).then(rows => {
      rows.shift();
      const mapRowData = [];
      rows.map(entry => {
        mapRowData.push({
          mobile: entry[0],
          earningId: entry[1],
          earning: entry[2]
        });
      });
      setData(mapRowData);
    });
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="heading">OYE RICKSHAW ASSIGNMENT</h1>
        <Dropzone className={'dropzone'} onFileUpload={onFileUpload} />
        <ExcelTable className="excel-table" data={data} onAction={onAction} />
      </div>
    </React.Fragment>
  );
};

export default App;
