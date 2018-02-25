import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  render(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[this.state.time.getDay()];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const month = months[this.state.time.getMonth()];

    return (
      <div >
      <h1>Clock</h1>
        <div className="clock">
          <div>
            <p>Time:</p>
            <p>Date:</p>
          </div>
          <div>
            <p>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</p>
            <p>{day} {month} {this.state.time.getDate()}, {this.state.time.getFullYear()}</p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.ticker = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.ticker);
    this.ticker = 0;
  }

  tick(){
    this.setState({ time: new Date()});
  }

}
