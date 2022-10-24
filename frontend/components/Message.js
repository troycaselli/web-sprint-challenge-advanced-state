import React from 'react';
import {connect} from 'react-redux';

function Message(props) {
  console.log(props.infoMessage);
  return <div id="message">{props.infoMessage}</div>
}

const mapStateToProps = state => {
  return {
    infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps, {})(Message);