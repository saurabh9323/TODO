import React from "react";

const prevdata = [
  { id: 1, task: "Go to market", completed: false },
  { id: 2, task: "Buy groceries", completed: false },
  { id: 3, task: "Clean the house", completed: false },
];

const InsertData = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [data, setData] = React.useState(prevdata);

  const handleInsert = () => {
    if (!inputValue.trim()) return;

    setData((prev) => [
      ...prev,
      {
        id: Date.now(),
        task: inputValue.trim(),
        completed: false,
      },
    ]);
    setInputValue("");
  };

  const handleRemove = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-card">
        <div className="todo-header">
          <h2>My Tasks</h2>
          <span>{data.filter((item) => !item.completed).length} pending</span>
        </div>

        <div className="todo-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={handleInsert}>Add</button>
        </div>

        <div className="todo-list">
          {data.map((item) => (
            <div
              key={item.id}
              className={`todo-item ${item.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
              />

              <span>{item.task}</span>

              <button
                className="delete-btn"
                onClick={() => handleRemove(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsertData;
