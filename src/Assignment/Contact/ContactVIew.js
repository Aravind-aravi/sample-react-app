import React from 'react';
import { Card, Button } from 'react-bootstrap'
export class ContactView extends React.Component {

    state = {
        editContactName: '',
        editAge: '',

    };

    constructor(props) {
        super(props);
        console.log('contructed called');

    }

    componentDidMount() {
        console.log("componentDidMount called");
        this.setState({ editContactName: this.props.contactName, editAge: this.props.userAge });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
    }


    render() {
        return <div className="text">

            <Card className="card">

                <div className="align">
                    Name:{this.state.editContactName}
                    <div>Adult:{this.state.editAge >= 18 ? 'YES' : 'NO'}</div>
                </div>

                <div>
                    {this.props.onfav === "false" ?
                        <Button variant="warning" className="fav" onClick={() => {
                            this.setState({ editFav: this.props.onfav });
                            this.props.onAddToFav(this.props.id);
                        }}>AddToFav</Button> :
                        <Button variant="danger" className="fav" onClick={this.props.onRemoveContact}>Remove</Button>}

                </div>
            </Card>

        </div>
    }
}