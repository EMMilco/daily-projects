import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
  desk: state.desk
});

const mapDispatchToProps = dispatch => ({
  showDesks: () => { dispatch({ type: "SET_DESKS_VISIBLE" }); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
