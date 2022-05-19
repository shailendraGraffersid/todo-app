import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <p>Todo List!</p>
            <input placeholder="enter task"> </input>
            <button type="submit">New List</button>
          </form>
        </div>
      </div>
    );
  }
}