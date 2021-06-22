import React, { Component } from 'react';

import MapComponent from './MapComponent';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recycleCenters: [
        {id: 123, name: 'atm1', latitude:28.568939, longitude: 77.223026}
        ],
      key: process.env.REACT_APP_API_KEY
    } 
  }
  render () {
    return (
      <div><MapComponent 
              recycleCenters={this.state.recycleCenters}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?   key=${this.state.key} &v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px`, width: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}/>
      </div>
    );
  }
}
export default Dashboard;