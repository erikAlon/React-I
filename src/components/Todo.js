import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        console.log('props: ', this.props)
        const myStyles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            <div style={myStyles} onClick={this.handleClick}>{this.props.thing}</div>
        )
    }
}

export default Todo;