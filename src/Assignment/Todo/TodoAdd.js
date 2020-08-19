
import React from 'react';

export class TodoAdd extends React.Component {
    state = {
        newItemText: ''
    };
    constructor(props) {
        super(props);
        console.log('contructed called');

    }
    componentDidMount() {
        console.log("componentDidMount called");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componenetDidUpdate called");
    }

    render() {
        console.log("render called");
        return <div className="TodoAdd">
            <h2>Todo Add</h2>
            <input type="text" onChange={(e) => this.setState({ newItemText: e.target.value })}
                value={this.state.newItemText}></input>
            <button onClick={() => {
                this.setState({ newItemText: '' });
                this.props.onAddItem(this.state.newItemText);
            }}>Add</button>
        </div>

    }
}