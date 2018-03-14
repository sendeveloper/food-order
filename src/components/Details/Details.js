import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';
import './Details.css'

class Details extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			showingInfoWindow: null
    }
		this.getRestaurantDetail();
	}
	getRestaurantDetail() {
		let api_url = "https://s3.amazonaws.com/br-codingexams/restaurants.json";
		let id = this.props.match.params.id;
		axios.get(`https://cors-anywhere.herokuapp.com/` + api_url,{headers: {'Access-Control-Allow-Origin': '*'}})
			.then((response) => {
				this.setState({data: response.data.restaurants[id]});
			})  
	}
	render() {
		let data = this.state.data;
		console.log(data);
		if (data.name !== undefined)
		{
			return (
				<div>
					<Map google={this.props.google} zoom={14} initialCenter={{
	            lat: data.location.lat,
	            lng: data.location.lng
	          }} style={{width: '100%', height: '180px', position: 'relative'}}>
		        <Marker onClick={() => this.onMarkerClick(this)}
		                name={'Current location'} />
		        <InfoWindow
		          position={{lat: data.location.lat, lng: data.location.lng}}
		          visible={this.state.showingInfoWindow}
		          onClose={() => this.onInfoWindowClose(this)}>
		            <div>
		              <p>{data.name}</p>
		            </div>
		        </InfoWindow>
		      </Map>
		      <div className="info">
		      	<div className="info_header">
		      		<h2 className="info_name">{data.name}</h2>
		      		<h3 className="info_category">{data.category}</h3>
		      	</div>
		      	<div className="info_body">
		      		<p className="info_address">{data.location.formattedAddress[0]}</p>
		      		<p className="info_phone">{data.contact.formattedPhone}</p>
		      		<p className="info_twitter">{data.contact.twitter}</p>
		      	</div>
		      </div>
				</div>
			);
		}
		else
			return (<div className="loading">Loading...</div>);
	}
	onInfoWindowClose(parent) {
    parent.setState({
      showingInfoWindow: false
    })
  }
	onMarkerClick(parent, marker) {
    parent.setState({
      showingInfoWindow: true
    });
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCQfQuFDmKaXXASfj0NuoDkpXvfEPodEus')
})(Details)