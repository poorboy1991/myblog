import React, {PureComponent} from  'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import {example, Test, example1} from '@pages'

export default () => (
    <Router history={hashHistory}>
        <Route path="/" component={Test}>
            <IndexRoute component={example} />
            <Route path="example1" component={example1}  />
        </Route>
    </Router>
)
