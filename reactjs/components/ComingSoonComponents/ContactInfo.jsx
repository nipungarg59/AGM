import React from "react"

export default class ContactInfo extends React.Component{
	render(){
		return(
			<div className="row">
			    <div className="col-sm-4 animated bounceInLeft sblock" style={{textAlign:"center"}}>
					    <i className="fa fa-phone fa-4x" ></i>
					    <p style={{fontFamily: 'Raleway',font:'sans-serif',fontSize:"18px"}}>011- 65 25 4066 <br/> +91 - 99 99 16 4066</p>
			    </div>
			     <div className="col-sm-4 animated bounceInUp sblock" style={{textAlign:"center"}}>
					    <i className="fa fa-envelope-o fa-4x" ></i>
					    <p style={{fontFamily: 'Raleway',font:'sans-serif',fontSize:"18px"}}>ca.akshaymittal @gmail.com</p>
			    </div>
			     <div className="col-sm-4 animated bounceInRight sblock" style={{textAlign:"center"}}>
					    <i className="fa fa-map-marker fa-4x" aria-hidden="true"></i>
					    <p style={{fontFamily: 'Raleway',font:'sans-serif',fontSize:"18px"}}>U-92, 2nd Floor, Meera Sadan, Shakarpur, New Delhi - 110 092</p>
			    </div>
			</div>
		)
	}
}