import React from "react"
import styles from "./css/navbarItems.css"
import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"
import {bootstrapUtils,addStyle,  Fade, Collapse, ProgressBar, Alert, Badge, Label} from "react-bootstrap"


export default class Headline extends React.Component {

	handleSelect(selectedKey) {
	  alert('selected ' + selectedKey);
	}

	render() {
    return (
    	<div>
	      	<div>
		        <Navbar fluid inverse collapseOnSelect fixedTop>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">React-Bootstrap</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav id="1">
				        <NavItem eventKey={1} href="#" >Link1</NavItem>
				        <NavItem eventKey={2} href="#">Link</NavItem>
				        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				          <MenuItem eventKey={3.1}>Action</MenuItem>
				          <MenuItem eventKey={3.2}>Another action</MenuItem>
				          <MenuItem eventKey={3.3}>Something else here</MenuItem>
				          <MenuItem divider />
				          <MenuItem eventKey={3.3}>Separated link</MenuItem>
				        </NavDropdown>
				      </Nav>
				      <Nav pullRight>
				        <NavItem eventKey={1} href="#">Link Right</NavItem>
				        <NavItem eventKey={2} href="#">Link Right</NavItem>
				      </Nav>
				    </Navbar.Collapse>
				</Navbar>
			</div>
			<div style={style2}>
			<h1>{ this.props.children }</h1>
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
	marginTop: "50px"
}