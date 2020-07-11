import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
	{ value: "a", label: "a" },
	{ value: "b", label: "b" },
	{ value: "c", label: "c" },
];

class Multiselect extends React.Component {
	state = {
		selectedOptions: [],
	};

	handleChange = (selectedOptions) => {
		this.setState({ selectedOptions }, () => {
			console.log(this.state.selectedOptions);
		});
	};

	render() {
		const { selectedOptions } = this.state;

		return (
			<React.Fragment>
				<Select
					isMulti
					value={selectedOptions}
					key={selectedOptions}
					onChange={this.handleChange}
					options={options}
					components={animatedComponents}
				/>
			</React.Fragment>
		);
	}
}

export default Multiselect;
