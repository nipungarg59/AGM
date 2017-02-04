import React from "react"
import { render } from "react-dom"
import Headline from "./components/Headline"
import Footer from "./components/Footer"
import ComingSoon from "./components/ComingSoon"

class MainApp extends React.Component{
	constructor(props) {
    	super(props);
      	this.state = {
        	comingSoon : true,
        	phoneIconVisible : 'hidden',
      	}
    }

    updateComingSoon(){
    	this.setState({
    		comingSoon : false,
    	})
    }

    phoneIcon(width){
		if(width<757)
		{
			this.setState({
				phoneIconVisible :'visible'
			})
		}
		else
		{
			this.setState({
				phoneIconVisible: 'hidden'
			})
		}
    }

	render(){
		if(this.state.comingSoon)
		{
			return(
				<div>
				<ComingSoon updateComingSoon={this.updateComingSoon.bind(this)} phoneIcon={this.phoneIcon.bind(this)}/>
				<div className="mobilePhoneIcon">
				<a  href="tel:01165254066" className="btn btn-danger btn-circle" style={{visibility:this.state.phoneIconVisible}}><i className="fa fa-phone fa-2x"></i>
				</a>
				</div>
				</div>
			)
		}
		else
		{
			return(
				<div className="animated fadeIn">
					<Headline>Heres the main page</Headline>
					<p className="big">Heres the fuckin main page</p>
					<Footer></Footer>
				</div>

			)
		}
	}
}

render(<MainApp/>, document.getElementById('MainApp'))