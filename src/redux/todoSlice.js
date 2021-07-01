/* eslist-disabled */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAPI = createAsyncThunk("todos/getTodosAPI", async () => {
	const res = await fetch("http://localhost:3001/tasks-list");
	if (res.ok) {
		const todos = await res.json();
		return { todos };
	}
});

export const deleteTodoAPI = createAsyncThunk("todos/deleteTodoAPI", async (payload) => {
	console.log(JSON.stringify(payload, null, 4));
	const res = await fetch(`http://localhost:3001/remove-task`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({ taskId: payload.id }),
	});
	if (res.ok) {
		return { id: payload.id };
	}
});

export const changeStatusTodoAPI = createAsyncThunk("todos/changeStatusTodoAPI", async (payload) => {
	const res = await fetch(`http://localhost:3001/change-status`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({ completed: payload.completed, taskId: payload.id }),
	});
	console.log("payload.id ", payload.id);
	if (res.ok) {
		const todos = await res.json();
		return { todos };
	}
});

export const addTodoAPI = createAsyncThunk("todos/addTodoAPI", async (payload) => {
	const res = await fetch(`http://localhost:3001/add-task/`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify({ title: payload.title }),
	});
	if (res.ok) {
		const todo = await res.json();
		return { todo };
	}
});

const todoSlice = createSlice({
	name: "todos",
	initialState: [],
	extraReducers: {
		[getTodosAPI.fulfilled]: (state, action) => {
			return action.payload.todos;
		},
		[deleteTodoAPI.fulfilled]: (state, action) => {
			const id = action.payload.id;

			return state.filter((el) => el.id !== id);
		},
		[changeStatusTodoAPI.fulfilled]: (state, action) => {
			return action.payload.todos;
		},
		[addTodoAPI.fulfilled]: (state, action) => {
			state.push(action.payload.todo);
		},
	},
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, changeTodoStatus } = todoSlice.actions;
