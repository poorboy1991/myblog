/*
*  @module search bar config
*  @author kai.xiang on 2019-01-25
*  @version 1.0.0
*/

import {
    LOGIN,
    LOGIN_SUC,
    LOGIN_ERROR,
    REG,
    REG_SUC,
    REG_ERROR,
    GET_USER_INFO,
    GET_USER_INFO_SUC,
    GET_USER_INFO_ERROR,
    LOGIN_OUT,
    LOGIN_OUT_SUC,
    LOGIN_OUT_ERROR,
    createAction
} from '../types'

import {
    lbPostFetch,lbGetFetch
} from '../../utils/fetch'

/*
*  post login
*  @returns {function} async function
*/

export function login(userData) {
    return async (dispatch) => {
        dispatch(createAction(LOGIN)())
        let res = await lbPostFetch('/signup/login', userData)
        if(!res.error) {
            dispatch(createAction(LOGIN_SUC, 'res')(res.data.uInfo))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(LOGIN_ERROR, 'error')(error))
            throw new LBError(res.code, res.error)
        }
    }
}

/**
 * check register action
 * @memberof module:action/user
 * @param {object} userData - user data to register
 * @returns {function()} async action
 */
export function register(userData) {
    return async (dispatch) => {
        dispatch(createAction(REG)())
        let res = await lbPostFetch('/signup/register', userData)

        if(!res.error) {
            dispatch(createAction(REG_SUC, 'res')(res.data.uInfo))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(REG_ERROR, 'error')(error))
            throw error
        }
    }
}

/**
 * check getUserInfo action
 * @returns {function()} async action
 */

export function getUserInfo() {
    return async (dispatch) => {
        dispatch(createAction(GET_USER_INFO)())
        let res = await lbGetFetch('/get-user-info')

        if(!res.error) {
            dispatch(createAction(GET_USER_INFO_SUC, 'res')(res.data.uInfo))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(GET_USER_INFO_ERROR, 'error')(error))
            throw error
        }
    }
}

/**
 * check getUserInfo action
 * @returns {function()} async action
 */

export function loginOut() {
    return async (dispatch) => {
        dispatch(createAction(LOGIN_OUT)())
        let res = await lbPostFetch('/logout')

        if(!res.error) {
            dispatch(createAction(LOGIN_OUT_SUC, 'res')(res.data.uInfo))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(LOGIN_OUT_ERROR, 'error')(error))
            throw error
        }
    }
}