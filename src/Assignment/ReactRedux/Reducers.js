
const initialStete ={
    counter:90
}

const reducer =  (state = initialStete,action) =>{
    if(action.type === 'INC_COUNTER'){
        return{...state,counter:state.counter+1}
    }else if (action.type === 'DEC_COUNTER') {
        return { ...state, counter: state.counter - 1 }
    } else if (action.type === 'ADD_COUNTER') {
        return { ...state, counter: state.counter + action.val }
    } else if (action.type === 'SUB_COUNTER') {
        return { ...state, counter: state.counter - action.val }
    }
    return state;
}
 export default reducer;