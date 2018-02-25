import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  visible : state.modals.deskHash
});

const mapDispatchToProps = dispatch => ({
  hideDeskHash : () => { dispatch({ type: "SET_DESK_HASH_HIDE" }); },
  setHash : password => { dispatch({ type: "SET_DESKTOP_HASH", password }); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
