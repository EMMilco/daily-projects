import React from 'react';

export default class Weather extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    const location = navigator.geolocation.getCurrentPosition();
  }
}
