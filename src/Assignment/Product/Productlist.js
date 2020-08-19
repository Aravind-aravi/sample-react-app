import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../src/Assignment/Product.css';

 export default class Productlist extends React.Component {


    

    addHandler = (key) => {
        console.log('added to fav item:', key);
    }

    render() {

        return (
            <div>
                <h3 className="head">Product List</h3>
                <Product id="1" title="Bingo" price='10' onaddFav={() => this.addHandler('1')}></Product>
                <Product id="2" title="Dairy milk" price='1001' onaddFav={() => this.addHandler('2')}></Product>
            </div>
        )
    }
}

function Product(props) {
    return (<div className={props.price > 1000 ? 'red' : 'black'}>
        <Card className="card">
            <h5> Title: {props.title}</h5>
            <h6> ID: {props.id}</h6>
            <p> Price: {props.price}</p>
            <div className="end">
                <button onClick={props.onaddFav}>addtoFav</button>
            </div>

        </Card>
    </div>
    )
}
