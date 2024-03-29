import React from "react"
// import styles from "./css/navbarItems.css"

export default class Headline extends React.Component {

	handleSelect(selectedKey) {
	  alert('selected ' + selectedKey);
	}

	render() {
    return (
    	<div id="top">
	      	<div className="container example-7" >
		        <nav className="navbar navbar-inverse navbar-default navbar-fixed-top">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>                        
				      </button>
				      <a className="navbar-brand" href="#"><img className="img-responsive" src="/static/images/lofgon.png"></img></a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="#top" data-toggle="collapse" data-target=".navbar-collapse.in">Home</a></li>
				        <li><a href="#about" data-toggle="collapse" data-target=".navbar-collapse.in">About Us</a></li>
				        <li className="dropdown">
				          <a className="dropdown-toggle" data-toggle="dropdown" href="#services">Services <span className="caret"></span></a>
				          <ul className="dropdown-menu animated fadeInUp">
				            <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in">Page 1-1</a></li>
				            <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in">Page 1-2</a></li>
				            <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in">Page 1-3</a></li>
				          </ul>
				        </li>
				        <li><a href="#contact" data-toggle="collapse" data-target=".navbar-collapse.in">Contact Us</a></li>
				        <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
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
	paddingTop:"90px"
}


