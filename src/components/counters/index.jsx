import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
	componentDidUpdate(prevProps, prevState) {
		console.log(prevProps, prevState);
		// Place to make changes when state or props changed
	}
	render() {
		const { counters, onReset, onIncrement, onDelete } = this.props;
		return (
			<div>
				<button className='btn btn-primary btn-sm m-2' onClick={onReset}>
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onIncrement={onIncrement}
						onDelete={onDelete}
						counter={counter}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
