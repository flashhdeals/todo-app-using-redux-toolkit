/* eslist-disabled */
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAPI, changeStatusTodoAPI } from "../redux/todoSlice";
function TodoItem({ id, title, completed }) {
	const dispatch = useDispatch();
	function handleDeleteTodo(id) {
		dispatch(deleteTodoAPI({ id }));
	}
	function handleCheckBox(id, completed) {
		dispatch(changeStatusTodoAPI({ id, completed }));
	}
	return (
		<li className={`list-group-item ${completed && "list-group-item-success"}`}>
			<div className="d-flex justify-content-between">
				<span className="d-flex align-items-center">
					<input type="checkbox" style={{ marginRight: "10px" }} checked={completed} onClick={() => handleCheckBox(id, completed)} /> {title}
				</span>
				<button className="btn btn-danger" onClick={() => handleDeleteTodo(id)}>
					Delete
				</button>
			</div>
		</li>
	);
}

export default TodoItem;
