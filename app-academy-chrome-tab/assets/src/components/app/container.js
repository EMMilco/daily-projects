import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  loaded : (state.day != null)
});

const mapDispatchToProps = dispatch => ({
  showOptions : () => { dispatch({ type: "SET_OPTIONS_VISIBLE" }); },
  getDay      : () => { dispatch({ type: "GET_DAY" }); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
