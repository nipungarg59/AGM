import React from "react"
import Map from 'google-maps-react'

export default class FooterMap extends React.Component{
	render(){
		return(
			<div>
				<p>Inside footer maps dj;</p>
				<div ref="map" style={mapStyle}>
					<Map style={mapStyle} google={window.google} initialCenter={{lat:28.629831,lng:77.277720}} zoom={15}>
					</Map>
				</div>
			</div>
		)
	}
}

var mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    }

// initialCenter={{lat:28.629831,lng:77.277720}} zoom={2}