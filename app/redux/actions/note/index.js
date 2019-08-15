/*
*  @module note action
*  @author kai.xiang on 2019-06-06
*  @version 1.0.0
*/

import {
    GET_NOTE_LIST,
    GET_NOTE_LIST_SUC,
    GET_NOTE_LIST_ERROR,
    ADD_NOTE_ITEM,
    ADD_NOTE_ITEM_SUC,
    ADD_NOTE_ITEM_ERROR,
    DELETE_NOTE_ITEM_SUC,
    DELETE_NOTE_ITEM_ERROR,
    DELETE_NOTE_ITEM,
    createAction
} from '../types'

import {
    lbPostFetch,lbGetFetch
} from '../../utils/fetch'

/*
*  get note list
*  @returns {function} async function
*/

export function getNoteList() {
    return async (dispatch) => {
        dispatch(createAction(GET_NOTE_LIST)())
        let res = await lbGetFetch('/get_note_list?')
        if(!res.error) {
            dispatch(createAction(GET_NOTE_LIST_SUC, 'res')(res.data))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(GET_NOTE_LIST_ERROR, 'error')(error))
            throw new LBError(res.code, res.error)
        }
    }
}

/*
*  add note item
*  @returns {function} async function
*/

export function addNoteItem(text) {
    return async (dispatch) => {
        dispatch(createAction(ADD_NOTE_ITEM)())
        let res = await lbPostFetch('/add_note', {text})
        if(!res.error) {
            dispatch(createAction(ADD_NOTE_ITEM_SUC, 'res')(res.data))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(ADD_NOTE_ITEM_ERROR, 'error')(error))
            throw new LBError(res.code, res.error)
        }
    }
}

/*
*  add note item
*  @returns {function} async function
*/

export function delNoteItem(id) {
    return async (dispatch) => {
        dispatch(createAction(DELETE_NOTE_ITEM)())
        let res = await lbPostFetch('/delete_note', {id})
        if(!res.error) {
            dispatch(createAction(DELETE_NOTE_ITEM_SUC, 'res')(res.data))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(DELETE_NOTE_ITEM_ERROR, 'error')(error))
            throw new LBError(res.code, res.error)
        }
    }
}