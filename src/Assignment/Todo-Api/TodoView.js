import React from 'react';

import { Card, Container } from '@material-ui/core'
import { Row } from 'react-bootstrap'
export default class TodoView extends React.Component {
    
    state = {
        edit: ''
    }

    constructor(props) {
        super(props);
        console.log('contructed view called');

    }

    componentDidMount() {
        this.setState({ edit: this.props.title })
    }


    componentDidUpdate() {


    }

    render() {
        return <div>
            <Container>
                <Card className="text">
                    <div className="title">
                        <Row>
                            <h5>{this.props.title}</h5>
                            <input type="text" onChange={(e) => { this.setState({ edit: e.target.value }) }}
                                value={this.state.edit}></input>
                            <button onClick={() => this.props.onEdit(this.props.id, this.state.edit)}
                            >edit</button>
                            <button onClick={() => this.props.onRemove(this.props.id)}>remove</button><br />

                        </Row>
                    </div><br />

                </Card>
            </Container>

        </div>
    }

}