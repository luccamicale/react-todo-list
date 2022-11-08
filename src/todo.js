import React, { useState } from "react";
import './style.css';

const App = () => {

    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo,
          };

        //add the todo to the list
        setList([...list, newTodo]);

        //clear input box
        setInput("");
    };

    const deleteTodo = (id) => {
        // Filter out todo with the id
        const newList = list.filter((todo) => todo.id !== id);
    
        setList(newList);
      };
    
    return(
        <div className="">
        <h1 className="title">Todo List React</h1>
        <input
          className="input"
          placeholder="Add your homework"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="but-add" onClick={() => addTodo(input)}>+</button>
        <ul className="ul">
        {list.map((todo) => ( //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
          <li className="list-add" key={todo.id}>
            {todo.todo}
            <button className="delete-but" onClick={() => deleteTodo(todo.id)}>-</button>
          </li>
        ))}
      </ul>
      </div>
    );
}

export default App