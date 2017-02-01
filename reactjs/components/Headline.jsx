import React from "react"
// import styles from "./css/navbarItems.css"

export default class Headline extends React.Component {

	handleSelect(selectedKey) {
	  alert('selected ' + selectedKey);
	}

	render() {
    return (
    	<div>
	      	<div className="container example-7">
		        <nav className="navbar navbar-inverse navbar-default navbar-fixed-top">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>                        
				      </button>
				      <a className="navbar-brand" href="#"><img className="img-responsive" src={require('./FooterComponents/css/images/logoLow.png')}></img></a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				        <li className="active"><a href="#">Home</a></li>
				        <li className="dropdown">
				          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
				          <ul className="dropdown-menu">
				            <li><a href="#">Page 1-1</a></li>
				            <li><a href="#">Page 1-2</a></li>
				            <li><a href="#">Page 1-3</a></li>
				          </ul>
				        </li>
				        <li><a href="#">Page 2</a></li>
				        <li><a href="#">Page 3</a></li>
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
				        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			</div>
			<div>
			<h1 style={style2}>{ this.props.children }</h1>
	    	<button type="button" className="btn btn-primary">Primary</button>
	    	<div>
	    		<p>dfj</p>
	    	</div>
	    	</div>
	    </div>
    )
  }
}

var style1 = {
	backgroundColor: "red",
	fontSize: "32"
}

var style2 = {
	marginTop: "0px",
	paddingTop:"70px"
}