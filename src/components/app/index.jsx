import React, { Component } from "react";
import Navbar from "../navbar";
import Counters from "../counters";
class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<Navbar />
				<Counters />
			</div>
		);
	}
}

export default App;
