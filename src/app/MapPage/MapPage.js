import React, {Component, useState} from 'react';

import MapComponent from './MapComponent';
import {Dispatcher} from "../Analysis/analysis";

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
      <div><Dispatcher/>
        <Layout/>
      </div>
    );
  }
}

const Layout = () => {
  const key = process.env.REACT_APP_API_KEY;
  const recycleCenters= [
    {id: 123, name: 'atm1', latitude:28.568939, longitude: 77.223026}
  ]
  const data= {
    bool:true,
    Name:"Name",
    Status:"Status",
    District:"District",
    Population:0,
    Number:0,
    Monthly:0,
  };

  const [data2, setdata2] =useState(data);

  return(
      <div className="d-flex">
        <MapComponent
            setter={setdata2}
            recycleCenters={recycleCenters}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?   key=${key} &v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}/>
          <div className="col-sm-4" hidden={data2.bool}>
            <div className="card">
              <div className="card-body m-3">
                <div className="row mb-2">
                  <h4 className="col-sm-6">Name</h4>
                  <h4 className="col-sm-6">{data2.Name}</h4>
                </div>
                <div className="row mb-2">
                  <h4 className="col-sm-6">Type</h4>
                  <h4 className="col-sm-6">{data2.Status}</h4>
                </div>
                <div className="row mb-2">
                  <h4 className="col-sm-6">District</h4>
                  <h4 className="col-sm-6">{data2.District}</h4>
                </div>
                <div className="row mb-2">
                  <h4 className="col-sm-6">Population</h4>
                  <h4 className="col-sm-6">{data2.Population}</h4>
                </div>
                <div className="row mb-2">
                  <h4 className="col-sm-6">Number of ATM</h4>
                  <h4 className="col-sm-6">{data2.Number}</h4>
                </div>
                <div className="row mb-2">
                  <h4 className="col-sm-6">Avg Monthly Transactions</h4>
                  <h4 className="col-sm-6">{data2.Monthly}</h4>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}
export default Dashboard;