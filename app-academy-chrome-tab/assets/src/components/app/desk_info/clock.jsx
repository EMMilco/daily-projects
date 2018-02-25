import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "0:00"
    };

    this.updateTime = this.updateTime.bind(this);
  }

  componentWillMount() {
    this.interval = null;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.updateTime();
    this.interval = setInterval(this.updateTime, 10000);
  }

  updateTime() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

    this.setState({time: currentHours + ":" + currentMinutes});
  }

  render() {
    return (
      <h1 className="clock">{this.state.time}</h1>
    );
  }
}
