import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  seconds : state.timer.seconds
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
