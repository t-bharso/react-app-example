import React, { Component } from "react";

class Counter extends Component {
	state = { count: 0 };
	handleClick = () => {
		this.setState({count: this.state.count + 1})
	}
	render() {
		return (
			<div>
				<span>{this.state.count}</span>
				<button onClick={this.handleClick} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button className="btn btn-danger btn-sm">Delete</button>
			</div>
		);
	}
}

export default Counter;
