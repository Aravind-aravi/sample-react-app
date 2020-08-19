import React from 'react';
import { Row } from 'react-bootstrap';
import UserAlbumPhotoView from './UserAlbumPhotoView';
import RemoveIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import { Card } from '@material-ui/core';

export default class UserAlbumView extends React.Component {



    render() {
        const albumData = this.props.albumdata.map(album => {
            return <div key={album.id}>
                <Card className="card">
                    <div className="post">
                        <Row><h6>Id:</h6>{album.id}</Row>
                        <Row className="upspace"> <h6>Album Title:</h6>{album.title}</Row>
                        <div className="remove">
                            <RemoveIcon className="red" type="button" onClick={() => this.props.onRemoveAlbum(album.id)} />
                        </div>

                    </div>
                    <UserAlbumPhotoView id={album.id}></UserAlbumPhotoView>
                </Card>
            </div>

        })

        return <React.Fragment>
            {albumData}
        </React.Fragment>
    }
}