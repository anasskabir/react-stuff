import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/nav";
import Users from "./pages/Users";

// import Todo from "./components/todo";
// import Title from "./components/title";
// import Modal from "./components/modal";
// import Counter from "./components/counter";
// import React, { useState, useEffect } from "react";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/:id" element={<Users />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );

  // <div>
    //   <Title></Title>
    //   <div>
    //     <input
    //       type="text"
    //       onChange={(event) => {
    //         console.log(event.target.value);
    //       }}
    //     />

    //     <button onClick={() => setShowModal(true)}>Add to do</button>
    //   </div>
    //   <div className="todo__wrapper">
    //     <Todo onTodoDelete={onTodoDelete} title="Finsih Frontend Simplified" />
    //     <Todo onTodoDelete={onTodoDelete} title="Finsih Interview Section" />
    //     <Todo onTodoDelete={onTodoDelete} title="Land a tech job iA" />
    //   </div>
    //   {showModal && (
    //     <Modal
    //       text="Are you sure?"
    //       confirmModal={confirmModal}
    //       removeModal={removeModal}
    //     />
    //   )}
    // </div>

  // return <Counter />
  // const [showModal, setShowModal] = useState(false);

  // function onTodoDelete() {
  //   setShowModal(true);
  //   console.log("onTodoDelete()");
  // }

  // function removeModal() {
  //   setShowModal(false);
  // }

  // function confirmModal() {
  //   setShowModal(false);
  // }

  // useEffect(() => {
  //   console.log('ONLY on mount')
  // }, [])
  
  // useEffect(() => {
  //   console.log(`on mount and on ${showModal} change`)
  // }, [showModal])
  
  // useEffect(() => {
  //   console.log('EVERY render')
  // },)
}

export default App;
