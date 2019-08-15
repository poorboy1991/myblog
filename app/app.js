import 'babel-polyfill'
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import Routes from '@configs/router.config'
import configure from '@middleware/configureStore'

const store = configure({ })

ReactDom.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root')
)