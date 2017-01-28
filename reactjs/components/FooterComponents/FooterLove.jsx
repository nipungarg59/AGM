import React from "react"

export default class FooterLove extends React.Component{
	render(){
		return(
			<div>
				<p>Made with <img src={require('./css/images/lIcon.png')} alt={"love"} /> By <a href={"https://www.facebook.com/nipungarg16"} >Nipun Garg</a></p>
			</div>
		)
	}
}

var style = {
  margin: 0,
  padding: 0,
  border: 0,
  background: 'transparent',
  fontSize: 'inherit',
}