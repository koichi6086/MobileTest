import {
    UPDATE_USER,
    UPDATE_FRIEND
} from './types';

export const updateUser = (payload) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_USER, payload })
    }
}

export const updateFriend = (payload) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_FRIEND, payload })
    }
}