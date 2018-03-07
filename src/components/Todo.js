import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
    }

    /*Methods*/

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleXClick = () => {

    }

    /*/Methods*/

    render() {
        const styles = this.state.clicked ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            <div>
                <div style={styles} onClick={this.handleClick}>{this.props.pItem}</div>
            </div>
        );
    }
}

export default Todo;

// from this component's POV, props are items