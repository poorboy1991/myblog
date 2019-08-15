/*
*  @module uInfo reducer
*  @author kai.xiang on 2019-03-19
*  @version 1.0.0
*/
import { combineReducers } from 'redux'
import { createReducer } from '../../../utils'
import {
    GET_USER_INFO_SUC, LOGIN_OUT_SUC,
    LOGIN_SUC,
    REG_SUC,
} from '../../../actions/types'

/**
 * user is login or not
 * @type {boolean}
 */
const isLogin = createReducer(false, {
    [LOGIN_SUC]() {
        return true
    },
    [GET_USER_INFO_SUC]({}, action) {
        return action.res.isLogin
    },
    [REG_SUC]() {
        return true
    },
    [LOGIN_OUT_SUC]() {
        return false
    }
})

const basic = createReducer({}, {
    [LOGIN_SUC](_basic, action) {
        return action.res.basic
    },
    [GET_USER_INFO_SUC](_basic, action) {
        return action.res.basic
    },
    [LOGIN_OUT_SUC](_basic, action) {
        return action.res.basic
    },
    [REG_SUC](_basic, action) {
        return action.res.basic
    },
})

export default combineReducers({
    isLogin,
    basic
})