import axios from 'axios';
const { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } = require('./user/userType')

const initialState = {
    loading: false,
    contact: [],
    error: ''
}


const reducer = (state = initialState, action) => {
    
    if (action.type === 'ADD_DATA') {

        const arrCopy = [...state.contact];
        let fav =false
        axios.post('http://localhost:5000/users',{  name: action.payload.name, age: action.payload.age, fav });
        arrCopy.push(
            { name: action.payload.name, age: action.payload.age, fav }
        );
     
        return { ...state, contact: arrCopy }

    }
    else if (action.type === 'ADD_FAV') {

        const arrCopy = [...state.contact];
        let fav = true
        axios.put(`http://localhost:5000/users/${action.payload.id}`,{id:action.payload.id,name: action.payload.name, age: action.payload.age, fav})
        arrCopy.forEach(item => {
            if (item.id === action.payload.id) {
                item.fav = fav;
            }
        })
        return { ...state, contact: arrCopy }

    }

    else if (action.type === 'REMOVE') {

        const arrCopy = [...state.contact];
        axios.delete(`http://localhost:5000/users/${action.payload.id}`)

        const filtered = arrCopy.filter(user => user.id !== action.payload.id);
        return { ...state, contact: filtered }

    }
    else if (action.type === 'RESET') {

        const arrCopy = [...state.contact];
        let fav = false
        axios.put(`http://localhost:5000/users`,{fav});
        arrCopy.forEach(item => {
            if (item) {
                item.fav = fav;
            }
        })
        return { ...state, contact: arrCopy }


    } else if(action.type === FETCH_USERS_REQUEST){
        return {
            ...state,
            loading: true
        }

    }else if(action.type === FETCH_USERS_SUCCESS){
        return {
            loading: false,
            contact: action.payload,
            error:''
        }
    }else if(action.type === FETCH_USERS_FAILURE){
        return {
            loading: false,
            contact:[],
            error:action.payload
        }

    }
    return state;
}
export default reducer;