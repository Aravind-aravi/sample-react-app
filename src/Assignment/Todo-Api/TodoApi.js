import React from 'react'
import axios from 'axios'
import TodoView from './TodoView'
export default class TodoApI extends React.Component {

    state = {
        users: [],
        text: "",
        edit: ""
    }

    constructor(props) {
        super(props);
        console.log('contructed called');

    }

    componentDidMount() {
        this.get();
    }

    componentDidUpdate() {
       
    }

    get = () => {
        axios.get('http://localhost:5000/').then((result) => {
            this.setState({ users: result.data });
        })

    }

    addUserHandler = () => {
        console.log(this.state.text);
        const arrCopy = [...this.state.users];
        axios.post('http://localhost:5000/', {id: Math.round(Math.random() * 1000), title: this.state.text });
        this.setState({users:arrCopy,text: '' });
        this.get();   

    }
    removeHandler = (id) => {
        console.log(id);
        const arrCopy = [...this.state.users];
        axios.delete('http://localhost:5000/' + id)
        const filtered = arrCopy.filter(user => user.id !== id);
        this.setState({ users: filtered });
    }

    editHandler = (id,title) => {
        const arrCopy = [...this.state.users]
        arrCopy.forEach(item => {
            if (item.id === id) {
                item.title = title;
                axios.put('http://localhost:5000/',{id:id,title:title})
            }
        })
        this.setState({ users: arrCopy });

    }
    
    render() {
        const data = this.state.users.map(user => {
            return (<div key={user.id}>
                <div>
                    <TodoView id={user.id} title={user.title} onRemove={this.removeHandler} onEdit={this.editHandler}></TodoView>
                          </div>
            </div>)

        })
        return <div>
            <h2>Todo Api</h2>
            <div>
                <input type="text" onChange={(e) => this.setState({ text: e.target.value })}
                    value={this.state.text}></input>
                <button onClick={this.addUserHandler}>add</button></div>
            {data}
        </div>

    }

}
