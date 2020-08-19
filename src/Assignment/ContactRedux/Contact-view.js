import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import {fetchUsers} from './user/userAction'
class Contactview extends Component {



componentDidMount(){
    this.props.fetchUsers();
} 
    render() {
        return (
            <div>

                {this.props.detail.map(user => {
                    return <div key={user.id}>

                        <Card className="card">

                            <div className="align">
                                Name:{user.name}
                                <div>Adult:{user.age >= 18 ? 'YES' : 'NO'}</div>
                            </div>

                            <div>
                                {user.fav === false ?
                                    <Button variant="warning" onClick={() => this.props.onAddToFavHandler(user.id,user.name,user.age)} >AddToFav</Button> :
                                    <Button variant="danger" onClick={() => this.props.onRemoveHandler(user.id)} >Remove</Button>}
                            </div>

                        </Card>

                    </div>
                })}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.contact
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToFavHandler: (id,name,age) => dispatch({ type: 'ADD_FAV', payload: { id,name,age } }),
        onRemoveHandler: (id) => dispatch({ type: 'REMOVE', payload: { id } }),
        fetchUsers:()=>dispatch(fetchUsers())

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Contactview);
