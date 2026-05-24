export function ToDo({todo, toggleTask, removeTask}) {
    return (
      <div key={todo.id} className="todo-item">
        <div
          className={`todo-text ${todo.complete ? "completed" : ""}`}
          onClick={() => toggleTask(todo.id)}
        >
          {todo.task}
        </div>
        <button onClick={() => removeTask(todo.id)} className="delete-btn">
          Удалить
        </button>
      </div>
    );
}
