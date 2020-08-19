import React from 'react'
import axios from 'axios';
import { Card, Row } from 'react-bootstrap';
import RemoveIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import Photo from './Photo';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Input} from '@material-ui/core';
export default class Album extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            album: [],
            albumTitle:''
        }
    }

    componentDidMount() {
        this.getAlbumData(this.props.match.params.id);
    }


    getAlbumData = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums/`).then((result) => {
            this.setState({ album: result.data });
        })

    }
    removeAlbumHandler = (id) => {
        console.log(id);
        const arrCopy = [...this.state.album];
        const filtered = arrCopy.filter(data => data.id !== id);
        this.setState({ album: filtered });
    }


    addUserAlbumHandler = (albumTitle) => {
        console.log(albumTitle);
        const arrCopy = [...this.state.album];
        arrCopy.push({ id: Math.round(Math.random() * 1000), title: albumTitle });
        this.setState({ album: arrCopy });
    }

    render() {
        const albumData = this.state.album.map(album => {
            return <div key={album.id}>
                <Card className="card">
                    <div className="post">
                        <Row><h6>Id:</h6>{album.id}</Row>
                        <Row className="upspace"> <h6>Album Title:</h6>{album.title}</Row>
                        <div className="remove">
                            <RemoveIcon className="red" type="button" onClick={() => this.removeAlbumHandler(album.id)} />
                        </div>

                    </div>
                    <Photo id={album.id}></Photo>
                </Card>
            </div>

        })

        return <React.Fragment>
            <Card style={{ width: '24cm' }}>
                <div className="albumtext">
                    <Row>
                        <h6>Enter Album Title:</h6>
                        <Input type="text" onChange={(e)=> this.setState({albumTitle:e.target.value})}
                        value={this.state.albumTitle} ></Input>
                        <AddCircleOutlineIcon onClick={()=>{
                            this.setState({albumTitle:''});
                            this.addUserAlbumHandler(this.state.albumTitle)}}
                         className="green" type="button" />
                    </Row>
                </div>


            {albumData}
            </Card>
        </React.Fragment>
    }
}