import React from 'react';
import { TodoAdd } from './TodoAdd';
import TodoView from './TodoView';
import '../../src/App.css';
export class TodoList extends React.Component {

    state = {
        List: []
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

    removeItemHandler = (id) => {
        console.log("Button Clicked", id);
        const arrCopy = [...this.state.List];
        const filtered = arrCopy.filter(elem => elem.id !== id);
        this.setState({ List: filtered });
    }

    addItemHandler = (text) => {
        console.log(text);
        const arrCopy = [...this.state.List];
        arrCopy.push({ id: Math.round(Math.random() * 1000), text });
        this.setState({ List: arrCopy });
    }

    updateItemHandler = (id, text) => {
        console.log(id, text);
        const arrCopy = [...this.state.List];
        arrCopy.forEach(item => {
            if (item.id === id) {
                item.text = text;
            }
        })
        this.setState({ List: arrCopy });

    }
    
    render() {
        console.log("render called");

        const itemsView = this.state.List.map(elem => {
            return <div key={elem.id}>
                <TodoView id={elem.id} itemText={elem.text} onUpdateItem={this.updateItemHandler}
                    onRemoveItem={() => this.removeItemHandler(elem.id)}></TodoView>
            </div>
        })

        return <div className="Todolist">
            <h2>Todo List</h2>
            <div>
                {this.state.List.map(i => <span key={i.id}>{i.text}</span>)}
            </div>
            <TodoAdd onAddItem={this.addItemHandler}></TodoAdd>
            <div>
                {itemsView}
            </div>

        </div>
    }
}