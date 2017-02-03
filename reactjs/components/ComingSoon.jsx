import React from "react"
import WindowSize from "../containers/WindowSize"
import ContactInfo from "./ComingSoonComponents/ContactInfo"
export default class ComingSoon extends React.Component {

	constructor(props) {
    	super(props);
      	this.state = {
        	width: '',
        	height: '',
        	coming: 'Coming Soon',
      	}
    }

	updateDimensions(height,width){
    	// console.log("dfjdj")
    	this.setState({
    		width: width,
    		height: height,
    	},function(){
    		if(this.state.width<1236)
    		{
    			this.setState({
    				coming :'Coming Soon'
    			})
    		}
    		else
    		{
    			this.setState({
    				coming: 'Our New Website Is Coming Soon'
    			})
    		}
    	}.bind(this))
    }

    updateComingSoon(){
    	this.props.updateComingSoon();
    }

	render(){
		return(
			<div className="bgimg" style={{height: String(this.state.height+80).concat("px"),width: String(this.state.width).concat("px"),color:"white"}}>
					<div className="displayTopleft w3-animate-top">
					<img src="/static/images/lofgon.png" style={{height:'60px',width:'80px'}} className="img-responsive"></img>
					</div>
					<div className="displayMiddle">
						<WindowSize updateDimensions={this.updateDimensions.bind(this)}></WindowSize>
						<h1 className="animated flipInX" style={{marginTop:0,fontFamily:"Coustard",font:"sans-serif"}}>{this.state.coming}</h1>
						<hr style={{margin:"auto",width:"40%"}}/>
					</div>
						<button className="btn buttonEffect" onClick={this.updateComingSoon.bind(this)}><h3>Continue</h3></button>
					<div className="displayMiddle2">
					<ContactInfo/>
					</div>

				</div>
		)
	}

}