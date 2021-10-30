import {
    SAVE_NAME,
} from './types';


export const saveName = (parent, age, childList) => dispatch => {
    dispatch({
        type: SAVE_NAME,
        payload: { parent, age, childList }
    })
}



