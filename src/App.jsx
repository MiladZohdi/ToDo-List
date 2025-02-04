import AddToDo from "./AddToDo";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="h-96 w-full rounded-2xl bg-neutral-800 p-6 text-neutral-200">
      <Header />
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
