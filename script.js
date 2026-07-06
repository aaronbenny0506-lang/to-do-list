const { useState } = React;

let nextId = 1;

function App() {
  const [tasks, setTasks] = useState([]);
  const [draft, setDraft] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setTasks((prev) => [...prev, { id: nextId++, text, done: false }]);
    setDraft("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="ledger">
      <h1>To-Do List</h1>

      <form className="entry-form" onSubmit={addTask}>
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="entries">
        {tasks.length === 0 && <li className="empty">No tasks yet.</li>}
        {tasks.map((t) => (
          <li key={t.id} className={t.done ? "done" : ""}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(t.id)}
            />
            <span className="text">{t.text}</span>
            <button className="delete" onClick={() => deleteTask(t.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
