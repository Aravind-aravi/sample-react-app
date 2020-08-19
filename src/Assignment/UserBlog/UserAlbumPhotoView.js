import React from 'react';
import axios from 'axios';
export default class UserAlbumPhotoView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: [],
            albumId: ""
        }
    }
    componentDidMount() {

    }
    componentDidUpdate() {
        if (this.state.albumId !== this.props.id) {
            this.getAlbumPhotoByAlbumId();
        }
    }

    getAlbumPhotoByAlbumId = () => {
        axios.get(`https://jsonplaceholder.typicode.com/albums/${this.props.id}/photos/`).then((result) => {
            this.setState({ photo: result.data });
        })

    }
    render() {
        const photo = this.state.photo.map(photo => {
            return <div key={photo.id}>
                <div className="posti">  
              <img src={photo.url} alt='' style={{ width: 50, height: 50 }} />
                {photo.title}</div>
            </div>
        })

        return <React.Fragment>
            {photo}
        </React.Fragment>
    }
}

