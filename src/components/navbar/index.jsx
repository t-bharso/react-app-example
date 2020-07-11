import React from "react";
const Navbar = ({ totalCounters }) => {
	return (
		<span className='badge badge-pill badge-primary'>
			Total-Item: {totalCounters}
		</span>
	);
};

export default Navbar;
