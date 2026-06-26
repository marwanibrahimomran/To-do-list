import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [showMes, setShowMes] = useState(false)
  const [newTodo, setNewTodo] = useState("");



  // HANDLE DELETE
  function HandleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // HANDLE ADD

  function HandleAdd() {
    if (newTodo.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), title: newTodo, completed: false },
      ]);
      setNewTodo("");
    }
  }

  // HANDLE COMPLETE

  function CompletedTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // HANDLE REMOVE 

  function RemoveAll() {
    if (todos.length === 0)
      setShowMes(true)
    else
      setTodos([])
  }

  function RemoveCompleted() {

    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }



  // HANDLE REMOVE MOTION

  function RemoveAllMotion() {
    const removemotion = document.getElementsByClassName("list")[0]
    removemotion.classList.add("plor")
  }

  function RemoveAllMotionOff() {
    const removemotion = document.getElementsByClassName("list")[0]
    removemotion.classList.remove("plor")
  }

  //COLSE POP
  function ClosePop() {
    setShowMes(false)
  }






  return (
    <div className="App">
      <h1>To do list - React app </h1>
      <div className="input-form">
        <input placeholder="   Write what you want to do HERE ..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button onClick={HandleAdd}>Add to do</button>
      </div>
      <div className="total ">
        <div className="--">
          <h3>Total : {todos.length}</h3>
          <h3>Completed : {todos.filter((todo) => todo.completed).length}</h3>
          <h3>Remaining :{todos.filter((todo) => !todo.completed).length}</h3>
        </div>

        <div>
          <button onMouseEnter={RemoveAllMotion}
            onMouseLeave={RemoveAllMotionOff}
            onClick={RemoveAll}>Remove all</button><br />
          {showMes && <div className="overlay"><div className="pop"><br /><h2>No tasks to remove</h2> <br />
            <button onClick={ClosePop} className="closebtn">x</button><br /></div> </div>}

          <button onClick={RemoveCompleted} >Remove Completed</button>

        </div>

      </div>
      <div className="list">
        <ul className="list">
          {todos.map((todo) => (
            <div key={todo.id} className="li-div"><li
              onClick={() => CompletedTodo(todo.id)}
              className={todo.completed ? "selected" : ""}>
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
