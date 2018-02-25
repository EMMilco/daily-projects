import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  pods: state.day.pods
});

const mapDispatchToProps = dispatch => ({
  set: podId => { dispatch({ type: "SET_POD_ID", podId }) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
