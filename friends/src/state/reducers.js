import * as types from './types';

const initialFriendsState = [
    {
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com',
    }
]

export const friendsReducer = ( state = initialFriendsState, action) => {
    switch(action.types) {
        case types.FETCH_FRIENDS:
        case types.ADD_FRIEND:
            return state;
        default:
            return state;
    }
}