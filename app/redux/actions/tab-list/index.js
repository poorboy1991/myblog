/*
*  @module tab list
*  @author kai.xiang on 2019-01-25
*  @version 1.0.0
*/

import {getBookMark, getScanHistory} from '../../utils/bookMark'

import {
    GET_TAB_LIST,
    GET_TAB_LIST_ERROR,
    GET_TAB_LIST_SUC,
    SHOW_BOOK_MARK,
    SHOW_HISTORY_LIST,
    createAction, REG, REG_SUC
} from '../types'
import {lbGetFetch, lbPostFetch} from "../../utils/fetch";

export const _getTabList = createAction(GET_TAB_LIST)
export const _getTabListError = createAction(GET_TAB_LIST_ERROR, 'error')
export const _getTabListSuc = createAction(GET_TAB_LIST_SUC, 'res')

export const _showBookMark = createAction(SHOW_BOOK_MARK, 'res')

export const _showHistory = createAction(SHOW_HISTORY_LIST, 'res')



/*
*  fetch searchConfig
*  @returns {function} async function
*/

export function getTabList() {
    /*暂时用模拟数据*/
    return async (dispatch) => {
        dispatch(_getTabList())
        let res = await lbGetFetch('/get-tab-list')

        if(!res.error) {
            dispatch(_getTabListSuc(res.data.tab_list))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(_getTabListError(error))
            throw error
        }
    }
}

/*
*  fetch hot list from chrome bookmark
*  @returns {function} async function
*/


export function showHistory() {

}

/*
*  fetch bookmark list
*  @returns {function} async function
*/
export function showBookMark() {
    return async(dispatch, getState) => {
       const result = await getBookMark()
        dispatch(_showBookMark(result))
    }
}

/*
*  fetch scan history list
*  @returns {function} async function
*/

export function showHistoryList() {
    return async(dispatch, getState) => {
        const result = await getScanHistory()
        dispatch(_showHistory(result))
    }
}
