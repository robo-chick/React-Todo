import React from 'react';
import styled from 'styled-components';

const ToDoHeading = styled.h3`
    font-family: 'Roboto', sans-serif; 
    font-size: 1.4rem;
`;

const AddButton = styled.button`
    border: 2px solid #4B0082;
    border-radius: 5px;
    background-color: #D8BFD8;
    font-family: 'Roboto', sans-serif;
    color: #4B0082;
    margin-left: 1%;
`

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state= {
           name: ''
        };
    };

    handleChange = e => {
        this.setState({ name: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        this.props.addTodo(e, this.state.name);
        this.setState({
            name: ''
        })
    };

    render() {
        return (
            <div className="todo-form">
                <ToDoHeading>To Do List:</ToDoHeading>
                <form onSubmit={this.onSubmit}>
                    <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <AddButton className="add-btn">Add Task</AddButton>
                </form>
            </div>
        )
    };
};

export default TodoForm;