import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const ToDoList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
`;

const CompleteBtn = styled.button`
border: 2px solid #4B0082;
border-radius: 5px;
background-color: #D8BFD8;
font-family: 'Roboto', sans-serif;
color: #4B0082;
height: 25px;
`;



const TodoList = props => {
    return (
        <ToDoList>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} />
            ))}
            <CompleteBtn className="complete-btn"onClick={props.clearCompleted}>Clear Completed</CompleteBtn>
        </ToDoList>
    )
}

export default TodoList;