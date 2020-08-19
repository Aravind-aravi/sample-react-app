
const redux = require('redux');

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return { ...state, counter: state.counter + 1 }
    } 
    return state;

}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log('[subscriber 1]', store.getState());
})

store.subscribe(() => {
    console.log('[subscriber 2 ]', store.getState());
})

store.dispatch({ type: 'INC_COUNTER', val: 10 });
