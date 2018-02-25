import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';


class Root extends React.Component {
  constructor(){
    super();
  }

  render() {
    const articles = [
      {title: "My Adventure in Alaska", content: "I was eaten yesterday by a bear."},
      {title: "My Adventure in New York", content: "I was pooped on by a pidgeon."}
    ];
    return (
    <div>
      <Clock />
      <Tabs articles={ articles }/>
    </div>
  );}
}


document.addEventListener("DOMContentLoaded", ()=> {
  const main = document.querySelector('main');
  ReactDOM.render(<Root />, main);
});
