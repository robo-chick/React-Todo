import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-family: 'Architects Daughter', cursive;
    color: white;
    font-size: 1rem;
`

const Todo = props => {
    return (
        <div 
        onClick={() => props.toggleComplete(props.todo.id)}
        className={`todo${props.todo.completed ? ' completed' : ''}`}
        >
            <StyledP>{props.todo.task}</StyledP>
        </div>
    )
};

export default Todo;