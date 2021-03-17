import React from 'react'
import {creactStore, applyMiddleware} from 'redux'
// 日志的记录中间件
import creactLogger from 'redux-logger'
import { Provider } from 'react-redux'
//redux-thunk：处理异步action,加强了dispatch的功能.在dispatch一个action之前，去判断action是否是一个函数，如果是函数，那么就执行这个函数。
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import PageMain from './PageMain'

const logger = creactLogger()
// const store = creactStore(reducer)
const store = creactStore(reducer, applyMiddleware(curStore => next => action => {
    console.info(curStore.getState(), action)
    return next(action)
}, logger, thunk))

const APP = () => {
    <Provider store={store}>
        <PageMain />
    </Provider>
}
ReactDOM.render(<APP />, doucument.getElementById('app'))