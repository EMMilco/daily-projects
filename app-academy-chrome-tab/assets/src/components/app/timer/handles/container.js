import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  playing: state.timer.playing
});

const mapDispatchToProps = dispatch => ({
  set: seconds => { dispatch({ type: "SET_SECONDS", seconds }); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
