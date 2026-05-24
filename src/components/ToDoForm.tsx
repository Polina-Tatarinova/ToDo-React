import { useState } from "react";

export function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Вводить вот сюда, если что..."
        />
        <button className="form-button">Добавить</button>
      </div>
    </form>
  );
}
