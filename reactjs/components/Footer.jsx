import React from "react"
import FooterMap from "./FooterComponents/FooterMap"
import FooterAddress from "./FooterComponents/FooterAddress"
import FooterLove from "./FooterComponents/FooterLove"
import s from "./abcd.css"
import fo from "./footer.css"

import {OverlayTrigger, Popover, Tooltip,Modal, Clearfix, ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, SplitButton} from "react-bootstrap"
import {Pager , Pagination, Row, Col, Tabs, Tab, Breadcrumb, FormGroup,FormControl, Nav, NavItem, NavDropdown, Navbar} from "react-bootstrap"
import {Well , Accordion, Panel, Table, ListGroup, ListGroupItem, Grid, Jumbotron, PageHeader} from "react-bootstrap"
import {Form,Glyphicon,  InputGroup,  Checkbox, Radio, ControlLabel,HelpBlock } from "react-bootstrap"
import {Media, Carousel, ResponsiveEmbed, Thumbnail,  Image} from "react-bootstrap"
import {bootstrapUtils,addStyle,  Fade, Collapse, ProgressBar, Alert, Badge, Label} from "react-bootstrap"

export default class Footer extends React.Component{
	render(){
		return(
			<div>
			<div className="bordered">
        <div>
        <h1>Contact Us</h1>
        <hr style={hrline}/>
        <br/>
        </div>
          <div style={add}>
            {/*<p className={s.red}>Addrefdgjkfdhghj hdfjdhffh  ufdhusdhfuiss goesdsd dsf fdsf dssdsfsgfdggdsfssdgdgffsddffsdfs herednbsfjhsdbhfbdsfhbchjb shbdshfb hjsdbfhdsh dsfhjd  dsfd sfgudgsufgduhfbchdsfugsdufb</p>*/}
            <br/><br/>
            <FooterAddress></FooterAddress>
          </div>
			    <div style={map}>
            <FooterMap></FooterMap>
          </div>
          {/*<div className={fo.row}>
            <div className={fo.col3}>
              <p className={s.red}>Addrefdgjkfdhghj hdfjdhffh  ufdhusdhfuiss goesdsd dsf fdsf dssdsfsgfdggdsfssdgdgffsddffsdfs herednbsfjhsdbhfbdsfhbchjb shbdshfb hjsdbfhdsh dsfhjd  dsfd sfgudgsufgduhfbchdsfugsdufb</p>
            </div>
          <div className={fo.col9}>
            <FooterMap></FooterMap>
          </div>
          </div>*/}
			</div>
      <div className={fo.love}>
        <FooterLove></FooterLove>
      </div>
			</div>
		)
	}
}

// var borderd = {
// "zigzag": {
//     "position": "relative",
//     "width": "100%",
//     "height": "200px"
//   },
//   "zigzag_before": {
//     "content": "\"\"",
//     "display": "block",
//     "position": "absolute",
//     "top": "-10px",
//     "width": "100%",
//     "height": "10px"
//   },
//   "container4": {
//     "background": "#222222"
//   },
//   "container4_before": {
//     "background": "linear-gradient(\n      45deg, transparent 33.333%,\n      #222222 33.333%, #222222 66.667%,\n      transparent 66.667%\n    ),\n    linear-gradient(\n      -45deg, transparent 33.333%,\n      #222222 33.333%, #222222 66.667%,\n      transparent 66.667%\n    )",
//     "backgroundSize": "20px 40px"
//   }
// }

var style = {
    backgroundColor: "#222222",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "60px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

var map = {
  float: 'left',
  width: '50%'
}

var add = {
  float: 'left',
  width: '50%'

}

var hrline = {
  color: 'white',
  margin: 'auto',
  width: '5%'
}