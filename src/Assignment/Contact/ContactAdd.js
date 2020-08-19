import React from 'react';
import { Button, Form } from 'react-bootstrap';
export class ContactAdd extends React.Component {
    state = {
        newContactName: '',
        newAge: '',
        fav: 'false'
    }
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
        return <Form>
            <div className="App">

                <div className="text">
                    <Form.Label column sm={2}> Enter your Name:</Form.Label>
                    <input type="text" onChange={(e) => this.setState({ newContactName: e.target.value })}
                        value={this.state.newContactName}></input>
                </div>

                <div className="text">
                    <Form.Label column sm={2}> Enter your Age:</Form.Label>
                    <input type="text" onChange={(e) => this.setState({ newAge: e.target.value })}
                        value={this.state.newAge}></input>
                </div>

                <div className="text">
                    <Button variant="success" onClick={() => {
                        this.setState({ newContactName: '', newAge: '' });
                        this.props.onAddContact(this.state.newContactName, this.state.newAge, this.state.fav);
                    }}>Add</Button>

                </div>

            </div>
        </Form>
    }
}