import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  playing : state.timer.playing
});

const mapDispatchToProps = dispatch => ({
  play  : () => dispatch({ type: "PLAY" }),
  pause : () => dispatch({ type: "PAUSE" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
