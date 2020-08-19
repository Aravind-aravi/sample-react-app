import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Card, Input } from '@material-ui/core';
import { Row } from 'react-bootstrap';
import UserPostView from './UserPostView';
import UserAlbumView from './UserAlbumView';


export default class UserAddData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            albumTitle:''
        }
    }



    render() {
        return <React.Fragment>

            <Card className="card">
                <h2>Posted Title</h2>
                <div className="post">
                    <Row className="text"><h6>Enter Post Title:</h6>
                        <Input type="text" onChange={(e) => this.setState({ title: e.target.value })}
                            value={this.state.title}> </Input>
                    </Row>
                    <Row className="text">
                        <h6>Enter Post Body:</h6>
                        <Input type="text" onChange={(e) => this.setState({ body: e.target.value })}
                            value={this.state.body}></Input>
                        <AddCircleOutlineIcon onClick={() => 
                        {   this.setState({title:'',body:''});
                            this.props.onAddPost(this.state.title, this.state.body)}}
                            className="green" type="button" />
                    </Row>
                    <UserPostView postdata={this.props.postdata} uId={this.props.userId} onRemovePost={this.props.onRemovePost}></UserPostView>
                </div>
            </Card>

            <Card className="card">
                <h2>Album Title</h2>
                <div className="post">
                    <Row>
                        <h6>Enter Album Title:</h6>
                        <Input type="text" onChange={(e)=> this.setState({albumTitle:e.target.value})}
                        value={this.state.albumTitle} ></Input>
                        <AddCircleOutlineIcon onClick={()=>{
                            this.setState({albumTitle:''});
                            this.props.onAddAlbum(this.state.albumTitle)}}
                         className="green" type="button" />
                    </Row>
                </div>

                <UserAlbumView albumdata={this.props.albumdata} uId={this.props.userId} 
                onRemoveAlbum={this.props.onRemoveAlbum}></UserAlbumView>
            </Card>

        </React.Fragment>
    }
}  