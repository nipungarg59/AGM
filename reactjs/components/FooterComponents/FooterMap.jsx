import React from "react"
import {Map,Marker,InfoWindow} from 'google-maps-react'
import {Image} from "react-bootstrap"

export default class FooterMap extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			center : {lat:28.629831,lng:77.277720},
			showInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		}
	}

	onMarkerClick(props,marker,e){
		this.setState({
			activeMarker: marker,
			showInfoWindow: true,
			selectedPlace: props,
		})
		// console.log(this.state.activeMarker);
	}

	windowHasClosed(){
		this.setState({
			activeMarker: {},
			showInfoWindow: false,
			selectedPlace: {},
		})
	}

	render(){
		return(
			<div>
				<div ref="map" style={mapStyle}>
				<div>
					<Map containerStyle={mapStyle2} google={window.google} initialCenter={this.state.center} zoom={15}>
					<Marker
					    name={'AG Mittal & Associates'}
					    position={this.state.center}

					    onClick={this.onMarkerClick.bind(this)}
					    />
					 <InfoWindow marker={this.state.activeMarker} visible={this.state.showInfoWindow} onClose={this.windowHasClosed.bind(this)}>
					 <div>
					 	<img src={require('./css/images/logoLow.png')}/>
					 </div>
					 </InfoWindow>
					</Map>
				</div>
				</div>
			</div>
		)
	}
}

var mapStyle = {
      width: 'auto',
      maxWidth: 500,
      height: 300,
      border: '1px solid black',
      position: 'relative',
    }

var mapStyle2 = {
	width: 'auto',
      maxWidth: 500,
	height: 300,
	position: 'relative',
}
// initialCenter={{lat:28.629831,lng:77.277720}} zoom={2}