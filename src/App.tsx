import { ToDo } from "./components/ToDo";
import { ToDoForm } from "./components/ToDoForm";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState(()=>{
    const saved = localStorage.getItem('todos')
    if(saved){
      return JSON.parse(saved);
    } 
    return [];
  });

   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

  const addTask = (userInput) => {
    if (userInput.trim()) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo },
      ),
    ]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Колличество задач:  <span className="task-count">{todos.length}</span></h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
