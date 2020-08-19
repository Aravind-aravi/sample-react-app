import React, { Component } from 'react';
import {connect} from 'react-redux';

 class CounterResult extends Component {
    render() {
        return (
            <div>
                Result:{this.props.ctr}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ctr:state.counter
    }

}


export default connect(mapStateToProps) (CounterResult);
