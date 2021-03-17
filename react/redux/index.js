import {creactStore} from 'redux'
import reducer from './reducer'
import {changeBtnText} from './action'

const store = creactStore(reducer)
const unsubscribe = store.subscribe(() => {
    console.info(store.getState)
})
store.dispatch(changeBtnText('🐔按钮'))
unsubscribe()