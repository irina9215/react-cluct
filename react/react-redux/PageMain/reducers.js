import * as TYPES from './actionTypes'
const initialState = {
    btnText: '按钮😞'
}
const pageMain = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.CHANGE_BTN_TEXT:
            return {
                ...state,
                btnText: action.payload
            }
            break;
    
        default:
            return {
                state
            }
            break;
    }
}
export default pageMain