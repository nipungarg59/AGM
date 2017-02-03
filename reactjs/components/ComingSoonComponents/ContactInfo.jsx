import React from "react"

export default class ContactInfo extends React.Component{
	render(){
		return(
			<div className="row">
			    <div className="col-sm-4" style={{textAlign:"center"}}>
					    <i className="fa fa-phone fa-4x" ></i>
					    <p>011- 65 25 4066 <br/> +91 99 99 16 4066</p>
			    </div>
			     <div className="col-sm-4" style={{textAlign:"center"}}>
					    <i className="fa fa-envelope-o fa-4x" ></i>
					    <p>ca.akshaymittal@gmail.com</p>
			    </div>
			     <div className="col-sm-4" style={{textAlign:"center"}}>
					    <i className="fa fa-map-marker fa-4x" aria-hidden="true"></i>
					    <p>U-92, 2nd Floor, Meera Sadan, Shakarpur, New Delhi - 110 092</p>
			    </div>
			</div>
		)
	}
}