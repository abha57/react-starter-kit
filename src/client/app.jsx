import React, { useEffect, useState } from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import store from './store';
import actions from './reducer/actions';

import LeftPanel from './components/leftPanel';
import RightPanel from './components/rightPanel';

const App = props => {
  const { data, loading, error, fetchPanelData } = props;
  //   const [leftPanel, setLeftPanel] = useState([]);
  //   const [rightPanel, setRightPanel] = useState([]);

  useEffect(() => {
    fetchPanelData();
  });
  //   fetchPanelData();

  //   const fetchLeftPanel = async () => {
  //     const resp = await fetch('https://api.github.com/users/supreetsingh247');
  //     const data = await resp.json();
  //     return data;
  //   };

  //   const fetchRightPanel = async () => {
  //     const resp = await fetch(
  //       'https://api.github.com/users/supreetsingh247/repos'
  //     );
  //     const data = await resp.json();
  //     return data;
  //   };

  //   useEffect(() => {
  //     let leftPanelData = null;
  //     let rightPanelData = null;
  //     async function makeApiCall() {
  //       const apiCalls = [];
  //       apiCalls.push(fetchLeftPanel(), fetchRightPanel());
  //       [leftPanelData, rightPanelData] = await Promise.all(apiCalls);
  //       setLeftPanel(leftPanelData);
  //       setRightPanel(rightPanelData);
  //     }
  //     makeApiCall();
  //   }, []);

  if (loading) return <div>Fethching data.... </div>;

  if (error) {
    return <div>There was some error. </div>;
  }

  const { leftPanel, rightPanel } = data;
  return (
    <React.Fragment>
      <LeftPanel data={leftPanel} />
      <RightPanel data={rightPanel} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    loading: state.loading,
    error: state.error,
    data: {
      leftPanel: state.leftPanel,
      rightPanel: state.rightPanel
    }
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPanelData: () => dispatch(actions.fetchPanelData())
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
