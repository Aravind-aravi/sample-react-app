import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import {fetchUsers} from './user/userAction'
class Contactadd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newContactName: '',
            newAge: '',
        }
    }

    render() {
        return (
            <div>
                <Form>
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
                                this.props.onAddHandler(this.state.newContactName, this.state.newAge);
                                this.setState({ newContactName: '', newAge: '' });
                            }}>Add</Button>
                        </div>

                    </div>
                </Form>

                <div>
                    <Button onClick={this.props.onResetHandler}>Reset</Button>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onAddHandler: (name, age) => dispatch({ type: 'ADD_DATA', payload: { name, age } }),
        onResetHandler: () => dispatch({ type: 'RESET' })

    }
}


export default connect(null, mapDispatchToProps)(Contactadd);
