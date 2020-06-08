import React, { Component } from "react";

class Counter extends Component {
	render() {
		const { counter, onIncrement, onDelete } = this.props;
		return (
			<div>
				<span>{counter.value}</span>
				<button
					onClick={() => onIncrement(counter)}
					className='btn btn-secondary btn-sm m-2'
				>
					Increment
				</button>
				<button
					onClick={() => onDelete(counter.id)}
					className='btn btn-danger btn-sm'
				>
					Delete
				</button>
			</div>
		);
	}
}

export default Counter;
