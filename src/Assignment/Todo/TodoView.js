import React from 'react';

export default class TodoView extends React.Component {

    state = {
        editText: '',
        action: '',
        List: []
    };

    constructor(props) {
        super(props);
        console.log('contructed called');

    }

    componentDidMount() {
        console.log("componentDidMount called");
        this.setState({ editText: this.props.itemText })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componenetDidUpdate called");
        if (this.state.action === 'FETCH') {
            console.log('fetching.....');
            this.setState({ List: [], action: '' })
        }

    }

    render() {
        console.log(`render called: ${this.props.itemText}`);
        return <div className="TodoView">
            <h2>Todo Item</h2>
            <div>
                <input type="text" onChange={(e) => this.setState({ editText: e.target.value })}
                    value={this.state.editText}></input>
                <button onClick={() => this.props.onUpdateItem(this.props.id, this.state.editText)
                }>Update</button>

            </div>
            <button onClick={() => this.setState({ action: 'FETCH' })}>Access API</button>
            <button onClick={this.props.onRemoveItem}>Remove</button>
        </div>
    }
}