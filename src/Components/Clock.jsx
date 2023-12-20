/* eslint-disable react/prop-types */
import React from "react";

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timeCounter = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeCounter);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    const { locale } = this.props;
    return (
      <div>
        <br />
        <span>Clock</span> <br />
        <span>{date.toLocaleTimeString(locale)}</span>
      </div>
    );
  }
}

export default Clock;
