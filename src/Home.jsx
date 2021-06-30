import React from "react";
import web from "../src/images/img3.jpg";
import {NavLink} from "react-router-dom";
import Common from "./Common";

const Home = () => {
	return (
		<>
			<Common name="Grow your business with" imgsrc={web} btname="Get Started" visit="/service" alt="Home Page" />
		</>
		);
}

export default Home;