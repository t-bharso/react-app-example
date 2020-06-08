import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div>
				<span>{this.props.counter.value}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className='btn btn-secondary btn-sm m-2'
				>
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className='btn btn-danger btn-sm'
				>
					Delete
				</button>
			</div>
		);
	}
}

export default Counter;
