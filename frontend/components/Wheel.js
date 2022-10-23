import React from 'react'
import {connect} from 'react-redux';
import {moveClockwise, moveCounterClockwise} from '../state/action-creators';

function Wheel(props) {
  const {wheel} = props;
  return (
    <div id="wrapper">
      <div id="wheel">
        {[0, 1, 2, 3, 4, 5].map(idx => (
          <div className={`cog${idx === wheel ? ' active' : ''}`} style={{ "--i": idx }} key={idx}>
            {idx === wheel ? 'B' : null}
          </div>
        ))}
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={() => props.moveCounterClockwise(wheel)} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => props.moveClockwise(wheel)}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wheel: state.wheel,
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);