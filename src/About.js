import React from "react";
import {projects} from './data.js'
import './brians.css'

const About = () => {
	return(
		<div>
		<p>
			<h2> {projects[0].title} </h2> {/*You can use map() for an array of objects iteration*/}
			<p>{projects[0].parag}</p>
			<h2> {projects[1].title} </h2>
		</p>
		</div>
	)
}

export default About;