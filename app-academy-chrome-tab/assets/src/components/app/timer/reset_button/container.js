import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  seconds : state.timer.seconds,
  playing : state.timer.playing
});

const mapDispatchToProps = dispatch => ({
  reset: () => { dispatch({ type: "SET_SECONDS", seconds: 0 }); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
