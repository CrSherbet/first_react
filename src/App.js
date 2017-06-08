import React, { Component } from 'react';
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

class App extends Component {

constructor(props){
  super(props)
  this.state = {
    todoItem: []
  }
  this.addTodo =  this.addTodo.bind(this)

  // this.state = {
  //   currTime: 0
  // }
  // this.handleFooterClicked = this.handleFooterClicked.bind(this)
}


// handleFooterClicked(time){
//   this.setState({currTime: time})
// }

addTodo(newTodo){
  this.setState({
    todoItem: this.state.todoItem.concat(newTodo)
  })
}

 render() {
    let {todoItem} = this.state
    return ( 
      <div>
        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList items={todoItem} />
       </div>
    );
  }
}

export default App;
