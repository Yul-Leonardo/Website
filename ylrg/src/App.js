import './App.css';
import React, { useEffect, useState } from "react";

const listFromLocalStorage = JSON.parse(localStorage.getItem("list") || "[]")

function App() {

  const [list, setList] = useState(listFromLocalStorage);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);
    console.log("list:")
    console.log(list)

    // clear input box
    setInput("");
  };

  // local storage
  useEffect(() => {
  localStorage.setItem("list", JSON.stringify(list)); 
  }, [list]);


  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
    console.log("newList:")
    console.log(newList)
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}> Add </button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
