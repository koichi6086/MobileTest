import {
    UPDATE_USER,
    UPDATE_FRIEND,
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    friend: null
}

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_USER: 
        return {...state,
            user: action.payload
        }
        case UPDATE_FRIEND:
        return {...state,
            friend: action.payload
        }
        default: 
        return state;
    }
}