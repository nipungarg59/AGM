import React from "react"
import WindowSize from "../containers/WindowSize"
import ContactInfo from "./ComingSoonComponents/ContactInfo"
export default class ComingSoon extends React.Component {

	constructor(props) {
    	super(props);
      	this.state = {
        	width: this.props.windowWidth,
        	height: this.props.windowHeight,
        	coming: 'Coming Soon',
      	}
    }

	updateText(){
    	// console.log("dfjdj")
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
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            width: nextProps.windowWidth,
            height: nextProps.windowHeight,
        },function utility(){
            this.updateText()
        })
    }


    updateComingSoon(){
    	this.props.updateComingSoon();
    }

	render(){
		return(
			<div className="bgimg2" style={{color:"white"}}>
					<div className="container animated bounceInDown" style={{paddingTop:'4%'}}>
					<img src="/static/images/lofgon.png" style={{maxHeight:'50%',width:'100%',maxWidth:'400px',margin:'auto'}} className="img-responsive"></img>
					</div>
					<div className="container" style={{paddingTop:'4%',textAlign:'center'}}>
						<h1 className="animated flipInX" style={{fontFamily:"Coustard",font:"sans-serif"}}>{this.state.coming}</h1>
						<hr style={{margin:"auto",width:"40%"}}/>
					</div>
					<div  className="container" style={{paddingTop:'4%',textAlign:'center'}}>
						<button className="btn buttonEffect" onClick={this.updateComingSoon.bind(this)}><h3>Continue</h3></button>
					</div>
					<div className="container" style={{paddingTop:'7%',textAlign:'center'}}>
					<ContactInfo/>
					</div>

				</div>	
		)
	}

}

// <div className="bgimg" style={{height: String(this.state.height+80).concat("px"),width: String(this.state.width).concat("px"),color:"white"}}>
// 					<div className="displayTopleft w3-animate-top">
// 					<img src="/static/images/lofgon.png" style={{height:'60px',width:'80px'}} className="img-responsive"></img>
// 					</div>
// 					<div className="displayMiddle">
// 						<WindowSize updateDimensions={this.updateDimensions.bind(this)}></WindowSize>
// 						<h1 className="animated flipInX" style={{marginTop:0,fontFamily:"Coustard",font:"sans-serif"}}>{this.state.coming}</h1>
// 						<hr style={{margin:"auto",width:"40%"}}/>
// 					</div>
// 						<button className="btn buttonEffect" onClick={this.updateComingSoon.bind(this)}><h3>Continue</h3></button>
// 					<div className="displayMiddle2">
// 					<ContactInfo/>
// 					</div>

// 				</div>