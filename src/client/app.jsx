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

// const App = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" component={ConnectedParent} exact />
//       <Route component={ErrorComponent} />
//     </Switch>
//   </BrowserRouter>
// );

export default App;
