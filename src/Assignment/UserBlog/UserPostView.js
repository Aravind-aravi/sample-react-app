import React from 'react';
import { Card } from '@material-ui/core';
import { Row } from 'react-bootstrap';
import RemoveIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

export default class UserPostView extends React.Component {


    render() {
        const postData = this.props.postdata.map(post => {
            return <div key={post.id}>

                <Card className="postviewcard">

                    <div className="posttitle">
                        <Row><h6>Id:</h6>{post.id}</Row><br/>
                        <Row><h6>Title:</h6>{post.title}</Row><br />
                        <Row><h6>Body:</h6><p>{post.body} </p></Row>
                    </div>
                    <div className="remove">
                        <RemoveIcon className="red" type="button" onClick={() => this.props.onRemovePost(post.id)} /></div>

                </Card>


            </div>
        })
        return <React.Fragment>
            {postData}
        </React.Fragment>
    }
}
