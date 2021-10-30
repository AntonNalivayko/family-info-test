import {
    SAVE_NAME,
} from '../actions/types';

const initialState = {
    parent: '',
    age: '',
    childList: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case SAVE_NAME:
            return {
                ...state,
                parent: payload.parent,
                age: payload.age,
                childList: payload.childList

            }

        default:
            return state
    }
};
