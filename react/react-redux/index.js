import React from 'react'
import {creactStore} from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import PageMain from './PageMain'

const store = creactStore(reducer)

const APP = () => {
    <Provider store={store}>
        <PageMain />
    </Provider>
}
ReactDOM.render(<APP />, doucument.getElementById('app'))