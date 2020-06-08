import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styled from 'styled-components';



const Container = styled.div`
  text-align: center;
  padding: 0 36px;
  max-width: 765px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Heading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  text-align: left;
`;




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
    const todos = this.state.todos.filter(todo => !todo.completed)
    this.setState({
      todos })
  };

  render() {
    return (
      <Container>
        <Header>
        <Heading>Stuff I Should Probably Do!</Heading>
        </Header>  
          <TodoForm 
            addTodo={this.addTodo} />
          <TodoList
            toggleComplete={this.toggleComplete}
            todos={this.state.todos}
            clearCompleted={this.clearCompleted} />
      </Container>
    );
  }
};

export default App;
