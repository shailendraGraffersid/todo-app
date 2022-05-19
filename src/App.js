import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [inputList, setInputList] = useState({  todo:"" });
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(0);

  const todoEvent = (event) =>{
    setInputList({...inputList, [event.target.name]:event.target.value, id:Math.random()*100,
    child: []})
  };
  const [childList, setInputChildList] = useState("");

  const addTodo = () => {
    setTodoList((oldTodoList)=>{
      return[...oldTodoList,inputList];
    });
    setInputList("");
  };


  const todoChildEvent = (event) =>{
    setInputChildList(event.target.value)
  }

  const addChildTodo = (id)=> {
    todoList.map((todo)=>{
      if(todo.id === id) {
        todo.child.push(childList)
        // todo.child.push()
        return todo
      }
      return todo
    })
    setInputChildList("");
  }

  const check=(e)=>{
    var checked = e.target.checked;
    if(checked){
      setCount(count+1)
      //console.log({inputList})
    }
    else{
      setCount(count-1)
    }
  }

  return (
    <div className="App">
      <div>
      <h1> Todo App</h1>
        <input type="text" name = 'todo' value={inputList.todo} placeholder="What to do?" onChange={todoEvent} /> &nbsp;
        <button onClick={addTodo}> New List </button> <br/>
        {
          todoList.map((result)=>{
            return(
              <>
                <h2 value={result}> {result.todo}  </h2>
                <p> {count} of {result.child.length} completed </p>
                {/* <h3 value={result}> {result.todo} "" {count} selected out of {result.child.length} </h3> */}
                {
                  result.child.map((childListResult)=>{
                    //debugger
                    return(
                      <>
                      <input type="checkbox" onChange={(e)=>{check(e)}}/> {childListResult} <br/>
                      {/* <h6 value={childListResult}> {childListResult} </h6> */}
                      </>
                    )
                  })
                }
                <input type="text"  value={childList} onChange={todoChildEvent} /> &nbsp;
                <button onClick={() => addChildTodo(result.id)}>New Step</button>
              </>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
