import { useState } from "react";

import { generateID, getData } from "./utils";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const id = generateID();
    const data = getData(event);

    setTodos((prevTodos) => [...prevTodos, { id, ...data }]);

    event.target.reset();
  };

  return (
    <div>
      <h1>TODO APP</h1>

      <h2>Form Submit TODO</h2>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="content" placeholder="content" />
        <button type="submit">Submit</button>
      </form>

      <h2>List TODO</h2>
      <ol>
        {todos.map((todo, index) => (
          <li key={`${todo.title}-${index}`}>
            <h3>{todo.title}</h3>
            <h4>{todo.content}</h4>
            <button>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
