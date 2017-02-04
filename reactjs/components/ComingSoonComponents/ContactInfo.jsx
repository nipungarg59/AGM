import React from "react"

export default class ContactInfo extends React.Component{
	render(){
		return(
			<div className="row">
			    <div className="col-sm-4 animated bounceInLeft sblock contact">
					    <i className="fa fa-phone fa-4x" ></i>
					    <p style={{fontFamily: 'Raleway',font:'sans-serif',fontSize:"18px"}}>011- 65 25 4066 <br/> +91- 99 99 164066<br/>+91- 9711 033545</p>
			    </div>
			     <div className="col-sm-4 animated bounceInUp sblock contact">
					    <i className="fa fa-envelope-o fa-4x" ></i>
					    <p style={{fontFamily: 'Raleway',font:'sans-serif',fontSize:"18px"}}>ca_agm@hotmail.com</p>
			    </div>
			     <div className="col-sm-4 animated bounceInRight sblock contact">
					    <i className="fa fa-map-marker fa-4x" aria-hidden="true"></i>
					    <p style={{fontFamily: 'Raleway',font:'sans-serif',fontSize:"18px"}}>U-92, 2nd Floor, Meera Sadan, Shakarpur, New Delhi - 110 092</p>
			    </div>
			</div>
		)
	}
}