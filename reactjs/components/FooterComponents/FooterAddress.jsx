import React from "react"
import styles from "./css/listIcons.css"

export default class FooterAddress extends React.Component{
	render(){
		return(
		<div>
		<div style={{float:'left'}}>
		<br/><br/>
			<div style={{textAlign:'left'}} className="os">
				<ul className={styles.address}>
					<li>U-92, 2nd Floor, Meera Sadan, Shakarpur, New Delhi - 110 092</li>
				</ul>
				<ul className={styles.phone}>
					<li>011- 65 25 4066 | +91 99 99 16 4066</li>
				</ul>
				<ul className={styles.email}>
					<li>ca.akshaymittal@gmail.com</li>
				</ul>
			</div>
		</div>
		</div>
	)}
}