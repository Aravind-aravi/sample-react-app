import React from 'react';
import { ContactAdd } from './ContactAdd';
import { ContactView } from './ContactVIew';
import { Button } from 'react-bootstrap';

export default class ContactList extends React.Component {
    state = {
        contact: [],
        fav: "true",
        favo: "false"
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

    addContactHandler = (name, age, fav) => {
        console.log(name, age, fav);
        const arrCopy = [...this.state.contact];
        arrCopy.push(
            { id: Math.round(Math.random() * 1000), name, age, fav }
        );
        this.setState({ contact: arrCopy });
    }

    addToFavHandler = (id) => {
        console.log(id, this.state.fav);
        const arrCopy = [...this.state.contact]
        arrCopy.forEach(item => {
            if (item.id === id) {
                item.fav = this.state.fav;
            }
        })
        this.setState({ contact: arrCopy });


    }

    removeContactHandler = (id) => {
        console.log("Button Clicked", id);
        const arrCopy = [...this.state.contact];
        const filtered = arrCopy.filter(user => user.id !== id);
        this.setState({ contact: filtered });

    }
    resetHandler = () => {
        console.log("reset completed");
        const arrCopy = [...this.state.contact];
        arrCopy.forEach(item => {
            if (item) {
                item.fav = this.state.favo;
                console.log(item.fav);
            }
        })

        this.setState({ contact: arrCopy });

    }

    render() {
        const userView = this.state.contact.map(user => {
            return <div key={user.id}>
                <ContactView id={user.id} userAge={user.age} onfav={user.fav}
                    contactName={user.name} onAddToFav={this.addToFavHandler}
                    onRemoveContact={() => this.removeContactHandler(user.id)}></ContactView>
            </div>
        })


        return <div>
            <ContactAdd onAddContact={this.addContactHandler}></ContactAdd>
            <Button className="reset" onClick={() => {
                this.resetHandler();
            }}>Reset</Button>
            {userView}

        </div>
    }
}