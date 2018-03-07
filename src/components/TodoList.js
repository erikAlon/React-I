import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            myList: [],
            todo: ''
        };
    }

    /*Methods*/

    addTodo = (event) => {
        event.preventDefault();
        const temp = this.state.myList;
        temp.push(this.state.todo);
        this.setState({
            myList: temp,
            todo: ''
        });
    }

    inputHandler = (event) => {
        this.setState({ todo: event.target.value });
    }

    /*/Methods*/

    render() {
        return (
            //pass empty array to todo when input field is updated
            // <input id="nameInput" type="text" name="name" />
            // <div>TodoList from my parent comp.  <Todo /></div>
            <div>
                {this.state.myList.map((item, i) => <Todo key={i} pItem={item} />)}
                <form onSubmit={this.addTodo}>
                    <input type="text" onChange={this.inputHandler} placeholder="Enter an item" value={this.state.todo} />
                </form>
            </div>
        );
    }
}

export default TodoList;