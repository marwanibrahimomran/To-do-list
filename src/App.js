import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  function HandleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function HandleAdd() {
    if (newTodo.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), title: newTodo, completed: false },
      ]);
      setNewTodo("");
    }
  }
  function CompletedTodo(id) {
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
}
  function RemoveAll(){
    if(todos.length === 0)
      alert("No Todos Yet")
    else
    setTodos([])
  }
  
  function RemoveAllMotion(){
  const removemotion = document.getElementsByClassName("list")[0]
  removemotion.classList.add("plor")
  }

  function RemoveAllMotionOff(){
  const removemotion = document.getElementsByClassName("list")[0]
  removemotion.classList.remove("plor")
  }

  function RemoveCompleted(){
    
    setTodos((prev)=>prev.filter((todo)=> !todo.completed))
  }
  
 


  return (
    <div className="App">
      <h1>To do list - React app</h1>
      <div className="input-form">
        <input placeholder="   Write what you want to do HERE ..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button onClick={HandleAdd}>Add to do</button>
      </div>
      <div className="total">
        <div className="--">
          <h3>Total : {todos.length}</h3>
          <h3>Completed : {todos.filter((todo)=> todo.completed).length}</h3>
         <h3>Remaining :{todos.filter((todo)=> !todo.completed).length}</h3>
        </div>
        <div>
        <button onMouseEnter={RemoveAllMotion}
        onMouseLeave={RemoveAllMotionOff}
        onClick={RemoveAll}>Remove all</button><br/>
        <button onClick={RemoveCompleted} >Remove Completed</button>

        </div>

      </div>
      <div className="list">
        <ul className="list">
          {todos.map((todo) => (
            <div key={todo.id} className="li-div"><li 
            onClick={() => CompletedTodo(todo.id)}
            className={todo.completed? "selected" : ""}>
              {todo.title}
            </li>
            <button onClick={() => HandleDelete(todo.id)}>-</button>
            </div>
            
          ))}
        </ul>
      </div>
    </div>

    
   
  );
}

export default App;