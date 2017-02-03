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
      	}
    }

    updateComingSoon(){
    	this.setState({
    		comingSoon : false,
    	})
    }

	render(){
		if(this.state.comingSoon)
		{
			return(<ComingSoon updateComingSoon={this.updateComingSoon.bind(this)}/>)
		}
		else
		{
			return(
				<div className="animated fadeInUpBig">
					<Headline>Heres the main page</Headline>
					<p className="big">Heres the fuckin main page</p>
					<Footer></Footer>
				</div>

			)
		}
	}
}

render(<MainApp/>, document.getElementById('MainApp'))