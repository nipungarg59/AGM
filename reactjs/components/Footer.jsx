import React from "react"
import FooterMap from "./FooterComponents/FooterMap"
import FooterAddress from "./FooterComponents/FooterAddress"
import ContactInfo from "./ComingSoonComponents/ContactInfo"
import ScrollAnimation from 'react-animate-on-scroll';

export default class Footer extends React.Component{
	render(){
		return(
			<div>
                <div className="footer fluid" id="contact">
                    <div className="container">
                        <h1><ScrollAnimation animateIn="fadeInUp">Contact Us</ScrollAnimation></h1>
                        <hr/>
                        <br/>
                    </div>
                    <div className="map">
                        <FooterMap></FooterMap>
                    </div>
                    <div className="container foo-contact">
                        <FooterAddress ></FooterAddress>
                    </div>
                </div>
                <div className="footer-prom">
                    <p>Made with <img src='/static/images/lIcon.png' alt={"love"} /> By <a href={"https://www.facebook.com/nipungarg16"} >Nipun Garg</a></p>
                </div>
            </div>
		)
	}
}


