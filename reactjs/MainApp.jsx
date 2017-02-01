import React from "react"
import { render } from "react-dom"
import Headline from "./components/Headline"
import Footer from "./components/Footer"

class MainApp extends React.Component{
	constructor(props) {
    	super(props);
      	this.state = {
        	load : false,
      	}
    }

    componentDidMount(){
    	this.setState({
    		load : true,
    	})
    }

	render(){
		if(this.state.load==false)
		{
			// TODO
			return(<h1>Waiting For the page to get load.</h1>)
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