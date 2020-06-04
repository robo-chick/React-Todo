import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} />
            ))}
            <button onClick={props.ClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList;