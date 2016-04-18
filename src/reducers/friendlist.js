import * as types from '../constants/ActionTypes';

const initialState = {
    friends: [1, 2, 3],
    friendsById: {
        1: {
            id: 1,
            name: 'Theodore Roosevelt'
        },
        2: {
            id: 2,
            name: 'Abraham Lincoln'
        },
        3: {
            id: 3,
            name: 'George Washington'
        }
    }
};

export default function friends(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}