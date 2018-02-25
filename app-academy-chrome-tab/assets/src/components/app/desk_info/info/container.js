import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({ 
  pods      : state.day.pods, 
  podId     : state.podId, 
  desk      : state.desk, 
  day       : state.day.day, 
  dateStamp : state.day.dateStamp, 
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
