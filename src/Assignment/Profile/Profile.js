
import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import { Row, Col, Container, Button } from 'react-bootstrap';
import '../Profile/Profile.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 1000,

    },
    media: {
        height: 250,
    },
});



const Profile = () =>{

    const [users, setUsers] = useState([
        {
            id: 1, name: "Aravind", street: "96th street", city: "Chennai", zip: 600068, mail: "aravindjai@gmail.com",
            mobile: 7845504099, img: "/image/a.jpg"
        },
        {
            id: 2, name: "Akash", street: "Redhills", city: "Chennai", zip: 600065,
            mail: "akash@gmail.com", mobile: 7845504099, img: "/image/e1.jpeg"
        }
    ])

    const removeItemHandler = (id) => {
        console.log("Removed", id);
        const arrCopy = [...users];
        const filtered = arrCopy.filter(elem => elem.id !== id);
        setUsers(filtered);
    }
    

    return <div >
            <h2>Profiles</h2>
        {
            users.map(user =>
            <User key={user.id} id={user.id} name={user.name} street={user.street} city={user.city}
                    zip={user.zip} mail={user.mail} mobile={user.mobile} img={user.img} onRemove={removeItemHandler}></User>)
        }
    </div>

}

const User = (props)=> {
    const classes = useStyles();

    return <div>
        <Container>
           
          <Row>
                <Col ms={6}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={props.img}
                                title="Contemplative Reptile" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Id:{props.id}<br />
                         Street:{props.street}<br />
                        City:{props.city}<br />
                        Zip:{props.zip}<br />
                        Mailid:{props.mail}<br />
                        Phone No:{props.mobile}<br />

                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <Button size="sm" variant="danger" color="primary" onClick={() => props.onRemove(props.id)}>
                            Remove</Button>
                    </Card>
                </Col>
                </Row> 
            
        </Container>


    </div>
}


export default Profile;