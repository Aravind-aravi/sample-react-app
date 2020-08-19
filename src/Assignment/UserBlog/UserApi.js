import React from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Select, Card } from '@material-ui/core';

import UserAddData from './UserAddData';


export default class UserApi extends React.Component {


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

    getPostData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.SelectUserId}/posts/`).then((result) => {
            this.setState({ post: result.data });
        })

    }

    getAlbumData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.SelectUserId}/albums/`).then((result) => {
            this.setState({ album: result.data });
        })

    }
    getUser = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.state.SelectUserId).then((result) => {
            this.setState({ user: result.data });
        })
    }

    removePostHandler = (id) => {
        console.log(id);
        const arrCopy = [...this.state.post];
        const filtered = arrCopy.filter(data => data.id !== id);
        this.setState({ post: filtered });
    }

    addUserPostHandler = (title, body) => {
        console.log(title, body);
        const arrCopy = [...this.state.post];
        arrCopy.push({ id: Math.round(Math.random() * 1000), title: title, body: body, userId: this.state.SelectUserId });
        this.setState({ post: arrCopy });

    }

    addUserAlbumHandler = (albumTitle) => {
        console.log(albumTitle);
        const arrCopy = [...this.state.album];
        arrCopy.push({ id: Math.round(Math.random() * 1000), title: albumTitle });
        this.setState({ album: arrCopy });
    }

    removeAlbumHandler = (id) => {
        console.log(id);
        const arrCopy = [...this.state.album];
        const filtered = arrCopy.filter(data => data.id !== id);
        this.setState({ album: filtered });
    }

    getPostAlbumData = () => {
        this.getAlbumData();
        this.getPostData();
        this.getUser();
    }

    render() {
        const data = <FormControl>
            <InputLabel htmlFor="user-name">Select User..</InputLabel>
            <Select native defaultValue={this.state.SelectUserId} id="user-name"
                onChange={(e) => {
                    this.setState({ SelectUserId: e.target.value });

                }} onClick={this.getPostAlbumData}>
                <option aria-label="none" value="" />
                {
                    this.state.userData.map(user => { return <option key={user.id} value={user.id}>{user.name}</option> })
                }
            </Select>
        </FormControl>

        return <div>
            <h2>UserApi</h2>
            {data}<br />
            <div className="cardpost">
                <Card >
                    <ol> <h6>Id:{this.state.user.id}</h6></ol>
                    <ol><h6>Name:{this.state.user.name}</h6></ol>
                    <ol> <h6>Email:{this.state.user.email}</h6></ol>
                    <ol> <h6>PhoneNo:{this.state.user.phone}</h6></ol>
                    <ol><h6>Website:{this.state.user.website}</h6></ol>
                </Card> 
                 </div>
            <UserAddData postdata={this.state.post} albumdata={this.state.album} userId={this.state.SelectUserId}
             onRemovePost={this.removePostHandler}
                onAddPost={this.addUserPostHandler} 
                onAddAlbum={this.addUserAlbumHandler}
                onRemoveAlbum={this.removeAlbumHandler}>
            </UserAddData>
        </div>
    }
}



