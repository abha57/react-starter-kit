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
};


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
export default App;
