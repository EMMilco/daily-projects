import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  set: cityId => dispatch({ type: "SET_CITY_ID", cityId })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
