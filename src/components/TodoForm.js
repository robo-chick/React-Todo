import React from 'react';

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
            <div>
                <h3>To Do List:</h3>
                <form onSubmit={this.onSubmit}>
                    <input
                    type='text'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    };
};

export default TodoForm;