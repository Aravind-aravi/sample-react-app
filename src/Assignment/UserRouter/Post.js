import React from 'react';
import axios from 'axios';
import { Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Input } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
export default class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: [],
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        this.getPostData();
    }


    getPostData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}/posts/`).then((result) => {
            this.setState({ post: result.data });
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
        arrCopy.push({ id: Math.round(Math.random() * 1000), title: title, body: body, userId: this.props.match.params.id });
        this.setState({ post: arrCopy });

    }



    render() {
        const postData = this.state.post.map(post => {
            return <div key={post.id}>

                <Card className="postviewcard">

                    <div className="posttitle">
                        <Row><h6>Id:</h6>{post.id}</Row><br />
                        <Row><h6>Title:</h6>{post.title}</Row><br />
                        <Row><h6>Body:</h6><p>{post.body} </p></Row>
                    </div>
                    <div className="remove">
                        <RemoveIcon className="red" type="button" onClick={() => this.removePostHandler(post.id)} /></div>

                </Card>


            </div>
        })


        console.log(this.props);
        return <React.Fragment>
            <Card style={{ width: '24cm' }}>

                <div>
                    <Card style={{ width: '10cm', marginTop: '1cm', marginLeft: '1cm' }}>
                        <div className="post">
                            <Row className="text"><h6>Enter Post Title:</h6>
                                <Input type="text" onChange={(e) => this.setState({ title: e.target.value })}
                                    value={this.state.title}> </Input>
                            </Row>
                            <Row className="text">
                                <h6>Enter Post Body:</h6>
                                <Input type="text" onChange={(e) => this.setState({ body: e.target.value })}
                                    value={this.state.body}></Input>
                                <Link to={{ pathname: `/user/` + this.props.match.params.id + `/post` }}>
                                    <AddCircleOutlineIcon onClick={() => {
                                        this.setState({ title: '', body: '' });
                                        this.addUserPostHandler(this.state.title, this.state.body);
                                    }}
                                        className="green" type="button" /></Link>
                            </Row>
                        </div>
                    </Card>
                </div>

                {postData}
            </Card>
        </React.Fragment>
    }
}