/* eslint-disable react/prop-types */
import React from "react";

class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "bn-BD",
    btn: "English",
  };

  componentDidMount() {
    this.timeCounter = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeCounter);
  }
  handleClick = () => {
    this.setState({
      btn: "Bangla",
      locale: "en-US",
    });
  };
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, locale, btn } = this.state;
    return (
      <h1>
        <span>Clock:</span>
        <span>{date.toLocaleTimeString(locale)}</span> <br />
        <button type="button" onClick={() => this.handleClick()}>
          {btn}
        </button>
      </h1>
    );
  }
}

export default Clock;
