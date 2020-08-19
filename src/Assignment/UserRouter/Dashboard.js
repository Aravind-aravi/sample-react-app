import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Navbar, Card, Col, Row, CardDeck, Nav } from 'react-bootstrap';
import axios from 'axios';
import Post from './Post';
import Album from './Album';
export default class Dashboard extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            user: '',
            post: [],
            SelectUserId: '0',
            album: []
        }
    }

    componentDidMount() {
        this.getUsers();
    }
    componentDidUpdate() {
    }



    getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/').then((result) => {
            this.setState({ userData: result.data });
        })

    }

    getUser = (id) => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then((result) => {
            this.setState({ user: result.data });
        })
    }


    render() {
        const data = this.state.userData.map(user => {
            return <Link key={user.id} to={{ pathname: '/user/' + user.id }} onClick={() => {
                this.setState({ SelectUserId: user.id });
                this.getUser(user.id);
            }} >{user.name}</Link>
        }
        )

        return (<React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src='/image/a.jpg'
                        width="30"
                        height="30"
                        className="d-inline-block align-top"

                    />
                    {'   '}User Api

                </Navbar.Brand>
            </Navbar>
            <div className="App">
                <h4>User Api</h4></div>
            <Row>
                <div >
                    <Row>
                        <Card style={{ width: '13rem' }} >
                            <h5>List of user:</h5>
                            {data}
                        </Card>
                    </Row>
                    <Row>
                        <Card style={{ width: '14rem' }}>

                            <h6>Id:{this.state.user.id}</h6>
                            <h6>Name:{this.state.user.name}</h6>
                            <h6>Email:{this.state.user.email}</h6>
                            <h6>PhoneNo:{this.state.user.phone}</h6>
                            <h6>Website:{this.state.user.website}</h6>
                        </Card>
                    </Row>
                </div>

                <div style={{ width: '24cm' }}>
                    <Row>
                        <Navbar bg="dark" style={{ width: '24cm' }} varient="dark">
                            <Navbar.Brand>
                                <Link to={{ pathname: `/user/` + this.state.SelectUserId + `/post` }}>Post</Link>

                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to={{ pathname: `/user/` + this.state.SelectUserId + `/album` }}>Album</Link>

                            </Navbar.Brand>
                        </Navbar></Row>
                    <Row>
                        <Route path={`/user/:id/post`} exact component={Post}></Route>
                        <Route path={`/user/:id/album`} component={Album}></Route>
                    </Row>


                </div>
            </Row>
        </React.Fragment>

        );
    }
}