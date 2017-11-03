import React, { Component } from 'react';

import {TodoForm,TodoList} from ".././components/todo";
import {addTodo, generateId, findById, updateTodo, toggleTodo} from "../lib/todoHelpers";
import {pipe, partial} from "../lib/utils";

class Todo extends Component {

    state = {
        todos: [
            {id: 1, name: 'Learn JSX', isComplete: true},
            {id: 2, name: 'Build an Awesome App', isComplete: false},
            {id: 3, name: 'Ship It', isComplete: false}
        ],
        currentTodo: ''
    }

    handleToggle = (id) => {

        const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo,this.state.todos))

        const updatedTodos = getUpdatedTodos(id, this.state.todos)
        this.setState({
            todos: updatedTodos
        })
    }

    handleInputChange = (evt) => {
        this.setState({
            currentTodo: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        const newId = generateId();
        const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
        const updatedTodos = addTodo(this.state.todos, newTodo)
        this.setState({
                todos: updatedTodos,
                currentTodo: '',
                errorMessage: ''
            }
        )

    }
    handleEmptySubmit = (evt) => {
        evt.preventDefault()
        this.setState({
            errorMessage: 'Please supply a todo'
        })
    }
    render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit  : this.handleEmptySubmit;
        return (
            <div className="App">
                <div className="Todo-App">
                    {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
                    <TodoForm handleInputChange={this.handleInputChange}
                              currentTodo={this.state.currentTodo}
                              handleSubmit={submitHandler}
                    />
                    <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />

                </div>
            </div>
        );
    }
}

export default Todo;
