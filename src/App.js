import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todos = [
  {
    task: 'clean desk',
    id: 1,
    completed: false
  },
  {
    task: 'TK review',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  toggleComplete = todoId => {
    console.log(todoId)
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = (e, todo) => {
    e.preventDefault();

    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };

  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h2>Stuff I Should Probably Do!</h2>
        </div>  
        <div id='todo'>
          <TodoForm 
            addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
          <TodoList
            toggleComplete={this.toggleComplete}
            todos={this.state.todos}
            clearCompleted={this.clearCompleted} />
        </div>  
      </div>
    );
  }
};

export default App;
