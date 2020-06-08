import React, { Component } from "react";
import Navbar from "../navbar";
import Counters from "../counters";
class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 },
		],
	};
	constructor() {
		super();
		console.log("App Constructor");
	}
	componentDidMount() {
		console.log("App Mounted");
		// Place to call Ajax call to get the data from server
	}
	componentDidUpdate() {
		console.log("App Updated");
		// Place to make changes when state or props changed
	}
	componentWillUnmount() {
		console.log("App Will unmount");
		// Place to make changes before the component will unmount - Deconsturctor
	}
	handleReset = () => {
		const counters = this.state.counters.map((counter) => {
			counter.value = 0;
			return counter;
		});
		this.setState(counters);
	};
	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};
	handleDelete = (counterId) => {
		console.log(counterId);
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};
	render() {
		return (
			<React.Fragment>
				<Navbar
					totalCounters={this.state.counters.filter((c) => c.value > 0).length}
				/>
				<main className='container'>
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
