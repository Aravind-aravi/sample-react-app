import React from 'react';
import { Form, Row, Col, Table } from 'react-bootstrap';
import '../edx assignment/Sample.css';

function ListItem(props) {
    return (
        <div>
            <Table style={{ width: '80rem' }} striped bordered hover>
                <thead>

                    <tr>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Buy</th>
                    </tr> </thead>
                <tbody>
                    <tr>
                        <td >{props.year}</td>
                        <td>{props.model}</td>
                        <td>${props.price}</td>
                        <td> <button >Buy Now</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
function ShoppingTitle(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.descri}</p>
        </div>

    )
}
function ShoppingList(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <ListItem year={props.years[0]} model={props.models[0]} price={props.prices[0]}></ListItem>
            <ListItem year={props.years[1]} model={props.models[1]} price={props.prices[1]}></ListItem>
            <ListItem year={props.years[2]} model={props.models[2]} price={props.prices[2]}></ListItem>
        </div>

    )
}

function ShoppingListss(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <ListItem year={props.years[0]} model={props.models[0]} price={props.prices[0]}></ListItem>
            <ListItem year={props.years[1]} model={props.models[1]} price={props.prices[1]}></ListItem>
            <ListItem year={props.years[2]} model={props.models[2]} price={props.prices[2]}></ListItem>
            <ListItem year={props.years[3]} model={props.models[3]} price={props.prices[3]}></ListItem>
        </div>

    )
}

function ShoppingLists(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <ListItem year={props.years[0]} model={props.models[0]} price={props.prices[0]}></ListItem>
            <ListItem year={props.years[1]} model={props.models[1]} price={props.prices[1]}></ListItem>
        </div>

    )
}
function VehiclesOption(props) {
    return (
        <div>
            <h5>{props.header}</h5>
            < div><Row as={Col}>  New Only<Form.Check aria-label="option 1" /></Row></div>
            <div > <Row as={Col}> Select Type <Form.Control style={{ width: '8rem' }} size="sm" as="select">
                <option>All</option>
                <option>cars</option>
                <option>trucks</option>
                <option>convertiable</option>

            </Form.Control></Row>
            </div>
        </div>

    )
}

function VehiclesApp() {
    return (
        <div>
            <ShoppingTitle title="Welcome to react transporation" descri='The best place to buy vehicles online'></ShoppingTitle>
            <VehiclesOption header="Choose Options" ></VehiclesOption>
            <ShoppingList header="Cars" years={['2013', '2011', '2016']} models={['A', 'B', 'B']} prices={['32000', '4400', '15500']}
            ></ShoppingList>
            <ShoppingLists header="Trucks" years={['2014', '2013']} models={['D', 'E']} prices={['18000', '5200']}></ShoppingLists>
            <ShoppingListss header="Convertibles" years={['2009', '2010', '2012', '2017']} models={['F', 'G', 'H', 'M']}
                prices={['2000', '6000', '12500', '50000']}></ShoppingListss>
        </div>
    )
}
export default VehiclesApp;