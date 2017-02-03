import React from "react"
import { render } from "react-dom"

export default class WindowSize extends React.Component {
	updateDimensions(){
		this.props.updateDimensions(window.innerHeight,window.innerWidth);	
	}

	componentWillMount(){
		this.updateDimensions();
	}

	componentDidMount(){
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }


	render(){
		return false;
	}
}