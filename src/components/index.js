import React, { Component } from 'react';
import ToDoList from './ToDoList'
// import NewComponent from './NewComponent';
import './styles.css';
import 'todomvc-app-css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ToDoList />
      </div>
    );
  }
}

export default App;
