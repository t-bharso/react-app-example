import React from "react";

function Form() {
	return (
		<form>
			<div className='form-group'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					className='form-control w-50'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					className='form-control w-50'
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='channel'>Channel</label>
				<input
					type='text'
					name='channel'
					id='channel'
					className='form-control w-50'
				/>
			</div>
			<button className='btn btn-primary btn-sm m-2'>Submit</button>
		</form>
	);
}

export default Form;
