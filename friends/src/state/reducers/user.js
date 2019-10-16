import * as types from '../types';

const initialUser = {
    username: '',
    password: ''
}

export const userReducer = ( state = initialUser, action) => {
    switch(action.types) {
        default:
            return state;
    }
}