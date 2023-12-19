import React from "react";

class Time extends React.Component {
  
  render() {
    return (
      <div>
        <span>The Time is: </span>
        <span>{new Date().toLocaleTimeString(this.props.locale)}</span>
      </div>
    );
  }
}

export default Time;
