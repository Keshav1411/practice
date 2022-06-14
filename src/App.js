

import logo from "./logo.svg";
//import styles from "./App.module.css";
import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [editValue, setEditValue] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo == "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    let temp = [];
    for (let i = 0; i < todos.length; i++) {
      if (i != index) {
        temp.push(todos[i]);
      }
    }
    setTodos(temp);
  };

  const handleEditTodo = (index) => {
    handleShow();
    setEditIndex(index);
  };

  const handleEdit = () => {
    let temp = todos;
    temp[editIndex] = editValue;
    setTodos(temp);
    handleClose();
  };

  const handleClose = () => setEdit(false);
  const handleShow = () => setEdit(true);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>ToDo List</h1>
      <div>
        <Form
          onSubmit={handleAddTodo}
          style={{ width: "60%", margin: "auto", marginTop: "20px" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Todo</Form.Label>
            <Form.Control
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter Todo"
            />
            <div style={{ textAlign: "center", margin: "15px" }}>
              <Button variant="primary" type="submit">
                Add Todo
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
      <div style={{ padding: "50px" }}>
        {todos.map((t, index) => {
          return (
            <div id={index} key={`Todo_${index}`}>
              <p style={{ margin: "0px" }}>{t}</p>
              <div>
                <Button onClick={() => handleEditTodo(index)} variant="warning">
                  Update
                </Button>
                <Button
                  onClick={() => handleDeleteTodo(index)}
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal show={edit} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>Todo: {todos[editIndex]}</p>
            <Form.Control
              onChange={(e) => setEditValue(e.target.value)}
              placeholder="Edit Todo"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export const variable = "Hello World";
/*import './App.css';
//import React from 'react';
import React, {useState} from 'react';
import {Form,Button} from "react-bootstrap";
//import "bootstrap/dist/css/bootrap.min.css";


export default function App(){
  const [todos,setTodos]=useState([]);
  const [counter,setcounter]=useState(0);
  const [newTodo,setNewTodo]=useState("");

  const handleAddTodo=(event)=>{
    event.preventDefault();
    setTodos([...todos,newTodo]);
  }

  const handleDeleteTodo=(index)=>{
    let temp=[];
    for(let i=0;i<todos.length;i++){
      if(i!=index){
        temp.push(todos[i]);
      }
    }
    setTodos(temp);
  }
return (
  <div>
  <h1 style={{textAlign: "center", marginTop:"50px"}}>To do List</h1>
  <div>
    <Form
    onSubmit={handleAddTodo}
    style={{width: "60%", margin:"auto",marginTop:"20px"}}
    >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Add Todo</Form.Label>
    <Form.Control onChange={(e)=>setNewTodo(e.target.value)}
      placeholder="Enter Todo"
    />
    <div style={{textAlign:"center", margin:"15px"}}>
    <Button variant='primary' type="submit">Submit</Button>
    </div>

  </Form.Group>
  </Form>
  </div>
  

  <div style={{padding:"50px"}}>

  {todos.map((t,index)=>{
    console.log(t);
    return(
      <div key={`Todo_${index}`} >
      <p style={{margin:"0px"}}>{t}</p>
      <div>
        <Button variant='warning'>
        Update
        </Button>
        <Button 
        onClick={()=>handleDeleteTodo(index)}
        variant='danger'>
          Delete
        </Button>
      </div>
      </div>
    );
  })
  }

  </div>
  </div>
)
}
/*
export default function App1(){

  const [counter,setcounter]=useState(0);
/*
  const handleIncrement=()=>{
    document.getElementById("value").innerHTML=
    parseInt(document.getElementById("value").innerHTML)+1;
  }


  
  const handleDecrement=()=>{
    document.getElementById("value").innerHTML=
    parseInt(document.getElementById("value").innerHTML)-1;
  }
  

    <button className='Button' style={{backgroundColor:"green", color:"white"}} onClick={()=>setcounter(counter+1)}>+</button>
    <p id="value">{counter}</p>
    <button className='Button' style={{backgroundColor:"red", color:"White"}} onClick={()=>setcounter(counter-1)}>-</button>
  
  
  return (
    <div className="App">
    <h1 className='Heading'>Counter</h1>
    <div style={{display:"flex", justifyContent:"space-evenly "}}>
    <Button variant='warning' onClick={() =>setcounter(counter+1)}>+</Button>
    <p id="value">{counter}</p>
    <Button variant='secondary' onClick={() =>setcounter(counter-1)}>-</Button>
    </div>
    </div>
  )
  
}
*/


