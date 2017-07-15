import React from "react"
import { render } from "react-dom"
import Headline from "./components/Headline"
import Footer from "./components/Footer"
import ComingSoon from "./components/ComingSoon"
import WindowSize from "./containers/WindowSize"
import Quote from "./components/Quote"

class MainApp extends React.Component{
	constructor(props) {
    	super(props);
      	this.state = {
        	comingSoon : true,
        	phoneIconVisible : 'hidden',
        	windowHeight: '',
        	windowWidth: '',
      	}
    }

    updateComingSoon(){
    	this.setState({
    		comingSoon : false,
    	})
    }

    phoneIcon(){
    	var width = this.state.windowWidth
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

    updateWindowDimensions(height,width){
    	this.setState({
    		windowHeight : height,
    		windowWidth : width,
    	},function abc(){
    		this.phoneIcon()
    	})
    }

	render(){
		if(this.state.comingSoon)
		{
			return(
				<div>
				<WindowSize updateWindowDimensions={this.updateWindowDimensions.bind(this)}></WindowSize>
				<ComingSoon updateComingSoon={this.updateComingSoon.bind(this)} windowHeight={this.state.windowHeight} windowWidth={this.state.windowWidth}/>
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
					<WindowSize updateWindowDimensions={this.updateWindowDimensions.bind(this)}></WindowSize>
					<div className="mobilePhoneIcon">
						<a  href="tel:01165254066" className="btn btn-danger btn-circle" style={{visibility:this.state.phoneIconVisible}}><i className="fa fa-phone fa-2x"></i>
						</a>
					</div>
					<Headline></Headline>
					<Quote></Quote>
					<Footer></Footer>
				</div>

			)
		}
	}
}

render(<MainApp/>, document.getElementById('MainApp'))