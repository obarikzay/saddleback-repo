import React, { Component } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer, DirectionsService, } from '@react-google-maps/api';
import { mapStyles } from './MapStyles';
import Markers from '../component/Markers';
import AcesRoute from '../component/AcesRoute';

const { withScriptjs, withGoogleMap } = require("react-google-maps");

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 41.504511,
    lng: -90.549637
};
const AUGUSTANA_BOUNDS = {
    north: 41.509083,
    south: 41.497427,
    west: -90.557047,
    east: -90.544640,
};

const libraries = ["places", "directions"]
const options = {
    styles: mapStyles,
    mapTypeId: 'hybrid',
    mapTypeControl: false,
    restriction: {
        latLngBounds: AUGUSTANA_BOUNDS,
        strictBounds: false
    }
}

export default class Map extends Component {
    render() {
        return (
            <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                libraries={libraries}
            >
            <h1>
                Augie Nav <span role="img" aria-label="satellite">📡</span>
            </h1>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
                options={options}
            >
            {/* Child components, such as markers, info windows, etc. */}
            <Markers />
            <AcesRoute/>
            </GoogleMap>
            </LoadScript>
         </div>
    );
}
}