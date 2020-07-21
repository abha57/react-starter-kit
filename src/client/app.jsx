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