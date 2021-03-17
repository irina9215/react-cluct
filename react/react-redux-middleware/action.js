import * as TYPES from './actionTypes'
export const changeBtnText = (text) => {
    return {
        type: TYPES.CHANGE_BTN_TEXT,
        playload: text
    }
}