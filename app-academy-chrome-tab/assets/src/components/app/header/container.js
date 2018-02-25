import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  showDeskHash : () => { dispatch({ type: "SET_DESK_HASH_VISIBLE" }) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
