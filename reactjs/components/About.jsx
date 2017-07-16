import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends React.Component {

	render(){
		return(
			<div id="about" className="about fluid">
				<div className="container">
					
					<h1 className="animated fadeInUp"><ScrollAnimation animateIn="fadeInUp">About Us</ScrollAnimation></h1>
					<hr/>
					<p>We are a NCR based professionally managed and innovative corporate service provider firm, with a multi-disciplinary focus providing top quality professional Consultancy Services.</p>
					<p>We believe that we are in a position to offer our skills to varied type of clients ranging from corporate sector undertaking, banks, and charitable institutions, small and medium level firms and individuals and have a creative and positive approach towards solutions to problems as they arise.</p>
					<p>Because of broad range of clients operation, it has given us the wide range of practical experience in system study, management Consultancy, Taxation (both Direct and Indirect), Financial Accounting, Corporate Audit (Internal, Statutory and Management) and audits. We are committed to help our clients by providing top quality and innovative business solutions.</p>
					<p>Our mission is to serve our clients with creativity, which is brought about by out of the box thinking, enthusiasm, which stems from the blend of young, experience and dynamic team members and vision which is captured by pre-empting client needs. This principle is at the heart of our work.</p>
				</div>
			</div>
		)
	}
}