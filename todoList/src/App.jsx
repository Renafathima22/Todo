import { useReducer, useState } from "react";

function reducer(tasks, action) {
  if (action.type === "add") {
    return [...tasks, action.task];
  }

  if (action.type === "delete") {
    return tasks.filter((_, index) => index !== action.index);
  }

  return tasks;
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  return (
    <div>
      <h1>Todo List</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button
        onClick={() => {
          if (task.trim() !== "") {
            dispatch({ type: "add", task: task });
            setTask("");
          }
        }}
      >
        Add
      </button>

      {tasks.map((item, index) => (
        <p key={index}>
          {item}
          <button
            onClick={() => dispatch({ type: "delete", index: index })}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default App;
