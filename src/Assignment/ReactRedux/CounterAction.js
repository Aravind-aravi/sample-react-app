import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import {connect} from 'react-redux';
export class CounterAction extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.onIncCounter}>Increment</Button>
                <Button onClick={this.props.onDecCounter}>Decrement</Button>
                <Button onClick={this.props.onAddCounter}>Add</Button>
                <Button onClick={this.props.onSubCounter}>Sub</Button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
return{
    onIncCounter:()=>dispatch({type:'INC_COUNTER'}),
    onDecCounter:()=>dispatch({type:'DEC_COUNTER'}),
    onAddCounter:()=>dispatch({type:'ADD_COUNTER',val:5}),
    onSubCounter:()=>dispatch({type:'SUB_COUNTER',val:5}),
}
}

export default connect(null,mapDispatchToProps)(CounterAction);
