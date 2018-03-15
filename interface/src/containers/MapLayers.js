import React from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, WMSTileLayer, Popup, ZoomControl } from 'react-leaflet'
import mapConfig from '../config/map_settings'
import { setActivePoint, populatePointDetailsAsync } from '../actions'
import 'leaflet/dist/leaflet.css';
import './MapLayers.css';
import PointDetails from './PointDetails.js'

let MapLayers = ({ dispatch, layers, indicators, point }) => {
  let active_layers = layers.filter(layer => layer.active === true);
  let active_indicators = indicators.filter(indicator => indicator.active === true);
  return (
    <div id="mapUI">
      <Map
        center={mapConfig.settings.center}
        zoom={parseInt(mapConfig.settings.zoom, 10)}
        minZoom={parseInt(mapConfig.settings.minZoom, 10)}
        zoomControl={false}
        id="map"
        onClick={function(e){
          dispatch(setActivePoint({lat: e.latlng.lat, lng: e.latlng.lng}))
          dispatch(populatePointDetailsAsync({lat: e.latlng.lat, lng: e.latlng.lng}, active_indicators[0]))
        }}
        closePopupOnClick={false}
      >
        <TileLayer url={ mapConfig.defaultBaseMap.uri } minZoom={ mapConfig.defaultBaseMap.params.minZoom } attribution={ mapConfig.defaultBaseMap.params.attribution }/>
        <PointDetails />
        {
          active_indicators.map((value, i) => (
            <WMSTileLayer key={i} url={value.source} layers={value.params.layers} format={value.params.format} transparent={value.params.transparent} opacity={0.8} zIndex={2}/>
          ))
        }
        {
          active_layers.map((value, i) => (
            <WMSTileLayer key={i} url={value.source} layers={value.params.layers} format={value.params.format} transparent={value.params.transparent} zIndex={3}/>
          ))
        }
        <ZoomControl position="bottomleft"/>
      </Map>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    layers: state.layers.layers,
    indicators: state.indicators.indicators,
    point: state.point
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

MapLayers = connect(mapStateToProps, mapDispatchToProps)(MapLayers)

export default MapLayers
