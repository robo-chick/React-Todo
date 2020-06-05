import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;

const ToDoHeading = styled.h3`
    font-family: 'Architects Daughter', cursive;
    font-size: 1.4rem;
`;

const AddButton = styled.button`
    border: 2px solid #4B0082;
    border-radius: 5px;
    background-color: #D8BFD8;
    font-family: 'Roboto', sans-serif;
    color: #4B0082;
    margin-left: 1%;
    height: 25px;
`;

const Input = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    color: #4B0082;
    background-color: #E6E6FA;
    border: 0;
    border-radius: 3px;
    font-family: 'Architects Daughter', cursive;
    font-size: 1rem;
`;

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
                <Form onSubmit={this.onSubmit}>
                    <Input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <AddButton className="add-btn">Add Task</AddButton>
                </Form>
            </div>
        )
    };
};

export default TodoForm;