/* eslint-disable */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAPI } from "../redux/todoSlice";
function AddTodoForm() {
	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value) {
			dispatch(addTodoAPI({ title: value }));
		}
		console.log(value);
	};
	return (
		<div className="row">
			<div className="col-md-12">
				<form onSubmit={handleSubmit} className="form-line mt-3 mb-3">
					<label>Todo Name</label>
					<input type="text" className="form-control mb-2 mr-sm-2" placeholder="Add your todo..." value={value} onChange={(e) => setValue(e.target.value)} />
					<button type="submit" className="btn btn-primary mb-2">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddTodoForm;
