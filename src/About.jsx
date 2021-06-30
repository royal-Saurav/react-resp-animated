import React from "react";
import web from "../src/images/img4.jpg";
import {NavLink} from "react-router-dom";
import Common from "./Common";

const About = () => {
	return (
		<>
			<Common name="Welcome To About Page" imgsrc={web} btname="Contact Now" visit="/contact" alt="About Page" />
		</>
		);
}

export default About;