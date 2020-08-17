import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './redux/actions';
import Parent from './parent';

const mapStateToProps = state => ({
  state: state
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const ConnectedParent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Parent);

export default ConnectedParent;
