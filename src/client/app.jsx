<<<<<<< HEAD
<<<<<<< HEAD
import React, {  useEffect } from "react";
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import store from './store';
import actions from './reducer/actions';

import LeftPanel from './components/leftPanel';
import RightPanel from './components/rightPanel';


const App = (props) => {
    const { data, loading, error, fetchPanelData } = props; 

    useEffect(() => {
        fetchPanelData();
    }, []);
    fetchPanelData();
    
    if(loading) return (
        <div>Fethching data.... </div>
    );

    if(error) {
        return (
            <div>There was  some error. </div>
        )
    }

    const { leftPanel, rightPanel } = data; 
    return (
        <React.Fragment>
           <LeftPanel data={leftPanel} />
           <RightPanel data= { rightPanel} />
        </React.Fragment>
    )
=======
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
>>>>>>> aae68ea3f0da659abd2d69cf1ced99dc1f341af8
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

<<<<<<< HEAD
const mapStateToProps = (state) => ({
 loading: state.loading,
 error: state.error,
 data: {
     leftPanel: state.leftPanel,
     rightPanel: state.rightPanel
 }
});


const mapDispatchToProps = (dispatch) => ({
    fetchPanelData: () => dispatch(actions.fetchPanelData())
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);


export default () => (
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
);
import React from 'react';
import AutoComplete from './components/AutoComplete';
import './styles.scss';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <AutoComplete />
      </div>
    </React.Fragment>
  );
};

=======
import React from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import actions from './redux/actions';
import Parent from './parent';
import ErrorComponent from './components/ErrorComponent';

const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Parent);

>>>>>>> 38a59041df9a5a1d9457f3dc750a0fa9a0c067b8
=======
>>>>>>> aae68ea3f0da659abd2d69cf1ced99dc1f341af8
export default App;
