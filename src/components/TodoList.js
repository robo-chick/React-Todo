import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const ToDoList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
`



const TodoList = props => {
    return (
        <ToDoList>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} />
            ))}
            <button className="complete-btn"onClick={props.clearCompleted}>Clear Completed</button>
        </ToDoList>
    )
}

export default TodoList;