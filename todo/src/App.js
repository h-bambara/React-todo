import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      todo:[
        {
          id: 1,
          title: "Hello, React",
          desc: "React始めました",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux!",
          desc: "Reduxも始めました",
          done: false
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>todoアプリを作ってみた</h1>
        </div>
        <div>
          <todoList
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
