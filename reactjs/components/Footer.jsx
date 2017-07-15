import React from "react"
import FooterMap from "./FooterComponents/FooterMap"
import FooterAddress from "./FooterComponents/FooterAddress"
import FooterLove from "./FooterComponents/FooterLove"
import ContactInfo from "./ComingSoonComponents/ContactInfo"
import s from "./abcd.css"
import fo from "./footer.css"

export default class Footer extends React.Component{
	render(){
		return(
			<div>
                <div className="bordered contact" id="contact" style={{paddingBottom:'0px'}}>
                    <div>
                        <h1 className="cheading">Contact Us</h1>
                        <hr style={hrline}/>
                        <br/>
                    </div>
                    <div style={{paddingBottom:'3%', paddingRight: '5%', paddingLeft: '5%'}}>
                        <FooterMap></FooterMap>
                    </div>
                    <div className="container" style={{paddingTop:'1%', paddingBottom:'3%', textAlign:'center'}}>
                        <FooterAddress ></FooterAddress>
                    </div>
                    <div className={fo.love}>
                        <FooterLove></FooterLove>
                    </div>
                </div>
            </div>
		)
	}
}

// var borderd = {
// "zigzag": {
//     "position": "relative",
//     "width": "100%",
//     "height": "200px"
//   },
//   "zigzag_before": {
//     "content": "\"\"",
//     "display": "block",
//     "position": "absolute",
//     "top": "-10px",
//     "width": "100%",
//     "height": "10px"
//   },
//   "container4": {
//     "background": "#222222"
//   },
//   "container4_before": {
//     "background": "linear-gradient(\n      45deg, transparent 33.333%,\n      #222222 33.333%, #222222 66.667%,\n      transparent 66.667%\n    ),\n    linear-gradient(\n      -45deg, transparent 33.333%,\n      #222222 33.333%, #222222 66.667%,\n      transparent 66.667%\n    )",
//     "backgroundSize": "20px 40px"
//   }
// }

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