import React from "react"
import FooterMap from "./FooterComponents/FooterMap"
import FooterAddress from "./FooterComponents/FooterAddress"
import ContactInfo from "./ComingSoonComponents/ContactInfo"
import ScrollAnimation from 'react-animate-on-scroll';

export default class Footer extends React.Component{
	render(){
		return(
			<div>
                <div className="bordered contact" id="contact" style={{paddingBottom:'0px'}}>
                    <div>
                        <h1 className="cheading"><ScrollAnimation animateIn="fadeInUp">Contact Us</ScrollAnimation></h1>
                        <hr style={hrline}/>
                        <br/>
                    </div>
                    <div style={{paddingBottom:'3%', paddingRight: '5%', paddingLeft: '5%'}}>
                        <FooterMap></FooterMap>
                    </div>
                    <div className="container" style={{paddingTop:'1%', paddingBottom:'3%', textAlign:'center'}}>
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

var style = {
    backgroundColor: "#222222",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "60px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

var map = {
  float: 'left',
  width: '50%'
}

var add = {
  float: 'left',
  width: '50%'

}

var hrline = {
  color: 'white',
  margin: 'auto',
  width: '10%'
}