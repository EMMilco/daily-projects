import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  minutes : Math.floor(state.timer.seconds / 60),
  seconds : state.timer.seconds % 60
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
