import React from "react"
import { render } from "react-dom"
import Headline from "./components/Headline"

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
				<div>
					<Headline>Heres the main page</Headline>
					<p>Heres the main page</p>
				</div>
			)
		}
	}
}

render(<MainApp/>, document.getElementById('MainApp'))