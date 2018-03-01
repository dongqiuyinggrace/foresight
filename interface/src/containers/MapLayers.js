import React from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, WMSTileLayer } from 'react-leaflet'
import mapConfig from '../config/map_settings'
import 'leaflet/dist/leaflet.css';
import './MapLayers.css';

let MapLayers = ({ dispatch, layers }) => {
  let active_layers = layers.filter(layer => layer.active === true);
  return (
    <div id="mapUI">
      <Map center={mapConfig.settings.center} zoom={parseInt(mapConfig.settings.zoom, 10)} minZoom={parseInt(mapConfig.settings.minZoom, 10)} id="map">
        <TileLayer url={ mapConfig.defaultBaseMap.uri } minZoom={ mapConfig.defaultBaseMap.params.minZoom } attribution={ mapConfig.defaultBaseMap.params.attribution }/>
        {
          active_layers.map((value, i) => (
            <WMSTileLayer key={i} url={value.source} layers={value.params.layers} format={value.params.format} transparent={value.params.transparent}/>
          ))
        }
      </Map>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    layers: state.layers.layers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

MapLayers = connect(mapStateToProps, mapDispatchToProps)(MapLayers)

export default MapLayers