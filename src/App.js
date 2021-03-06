import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
// import './App.css';

function App() {
	return (
		<div className="container bg-white p-6 mt-5">
			<h1>Todo List</h1>
			<AddTodoForm />
			<TodoList />
		</div>
	);
}

export default App;
