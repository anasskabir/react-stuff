import "./App.css";
import Todo from "./components/todo";
import Title from "./components/title";
import Modal from "./components/modal";
import Counter from "./components/counter";
import React, {useState} from "react";

function App() {

  return <Counter />

  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Title></Title>
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
  
        <button onClick={() => setShowModal(true)}>Add to do</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finsih Frontend Simplified" />
        <Todo title="Finsih Interview Section" />
        <Todo title="Land a tech job iA" />
      </div>
      {showModal ? <Modal text = "Are you sure?"/> : null }
    </div>
  );
}

export default App;
