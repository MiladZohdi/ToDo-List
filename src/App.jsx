import AddToDo from "./Components/AddToDo";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import useToDo from "./useToDo";

function App() {
  const { todos, addTodo, clearCompleted } = useToDo();
  return (
    <div className="h-96 w-full rounded-2xl bg-neutral-800 p-6 text-neutral-200">
      <Header />
      <AddToDo addTodo={addTodo} clearCompleted={clearCompleted} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
