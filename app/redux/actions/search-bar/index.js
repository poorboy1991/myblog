/*
*  @module search bar config
*  @author kai.xiang on 2019-01-25
*  @version 1.0.0
*/

import {
    GET_SEARCH_BAR_CONFIG,
    GET_SEARCH_BAR_CONFIG_SUC,
    GET_SEARCH_BAR_CONFIG_ERROR,
    createAction, LOGIN_OUT_SUC, LOGIN_OUT_ERROR, LOGIN_OUT
} from '../types'
import {lbGetFetch, lbPostFetch} from "../../utils/fetch";


/*
*  fetch searchConfig
*  @returns {function} async function
*/

export function getSearchConfig() {
    return async (dispatch) => {
        dispatch(createAction(GET_SEARCH_BAR_CONFIG)())
        let res = await lbGetFetch('/get-search-config')
        if(!res.error) {
            dispatch(createAction(GET_SEARCH_BAR_CONFIG_SUC, 'res')(res.data.search_config))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(GET_SEARCH_BAR_CONFIG_ERROR, 'error')(error))
            throw error
        }
    }
}

