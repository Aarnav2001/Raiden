import React, { useState, useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import {useSelector} from "react-redux";
import {ProgressBar} from "react-bootstrap";
const Map = withScriptjs(withGoogleMap((props) =>{

    useEffect(() => {
        const listener = e => {
           if (e.key === "Escape") {
              setSelectedCenter(null);
           }
        };
        window.addEventListener("keydown", listener);
        return () => {
           window.removeEventListener("keydown", listener);
        };
     }, 
     []);

    const datas = useSelector((state) => state.data);
   const [selectedCenter, setSelectedCenter] = useState(null);
    const iconUrl ="https://loc8tor.co.uk/wp-content/uploads/2015/08/stencil.png";
    const Scaled= (data) => {
        const h = (data/6000) * 90;
        const w = (data/6000) * 42;
        return new window.google.maps.Size(h, w);
    }
    let temp;
   return (
       <div className="row">
           <div className="col-sm-8">
               <GoogleMap zoom={4.5} center={{lat: 23.2599, lng: 77.4126}}>

               {selectedCenter && (
                   <InfoWindow
                       onCloseClick={() => {
                           setSelectedCenter(null);
                       }}
                       position={{
                           lat: selectedCenter.latitude,
                           lng: selectedCenter.longitude
                       }}
                   >
                       <div>
                           <h3>I can render all sorts of shit here</h3>
                       </div>
                   </InfoWindow>
               )}
               {datas.map((data) => (
                   <Marker
                       key={data.FIELD1}
                       position={{
                           lat: data.Latitude,
                           lng: data.Longitude
                       }}
                       icon={{url: iconUrl, scaledSize: Scaled(data.Monthly)}}
                       onClick={() => {
                           props.setter((prevState)=> {
                               temp = {
                                   bool:!prevState.bool,
                                   Name:data.Name,
                                   Status:data.Status,
                                   District:data.District,
                                   Population:data.Population,
                                   Number:data.Number,
                                   Monthly:data.Monthly,
                           }
                           return temp;
                           });
                       }}
                   />
               ))}
           </GoogleMap></div>

       </div>
    )
            }))

export default Map;
















/*
import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps";

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
            onClick={e => props.onMapClick(e)}
        >
            {props.marks.map((mark, index) => (
                <Circle
                    key={index}
                    center={mark}
                    radius={1000}
                    options={{
                        strokeColor: "#66009a",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: `#66009a`,
                        fillOpacity: 0.35,
                        zIndex: 1
                    }}
                />
            ))}
        </GoogleMap>
    ))
);

class ReportsPage extends Component {
    state = {
        marks: []
    };

    setMark = e => {
        this.setState({ marks: [...this.state.marks, e.latLng] });
    };

    deleteMark = () => {
        this.setState({
            marks: []
        });
    };

    render() {
        const { marks } = this.state;
        return (
            <div>
                <button onClick={this.deleteMark}>DELETE MARKS</button>
                <Map
                    googleMapURL="http://maps.googleapis.com/maps/api/js?key=Your Key here"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMapClick={this.setMark}
                    marks={marks}
                />;
            </div>
        );
    }
}

export default ReportsPage; */