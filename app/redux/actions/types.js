/*
*  @file const type & createAction
*  @author kai.xiang on 2019-01-25
*  @version 1.0.0
*/

export function createAction(type, ...argNames) {
    return function(...args) {
        const action = {type}
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

/*search config*/
export const GET_SEARCH_BAR_CONFIG = 'GET_SEARCH_BAR_CONFIG';
export const GET_SEARCH_BAR_CONFIG_SUC = 'GET_SEARCH_BAR_CONFIG_SUC';
export const GET_SEARCH_BAR_CONFIG_ERROR = 'GET_SEARCH_BAR_CONFIG_ERROR';

/*tab list*/

export const GET_TAB_LIST = 'GET_TAB_LIST';
export const GET_TAB_LIST_ERROR = 'GET_TAB_LIST_ERROR';
export const GET_TAB_LIST_SUC = 'GET_TAB_LIST_SUC';
export const SHOW_HISTORY_LIST = 'SHOW_HISTORY_LIST';
export const SHOW_BOOK_MARK = 'SHOW_BOOK_MARK';

/*user*/

export const LOGIN = 'LOGIN'
export const LOGIN_SUC = 'LOGIN_SUC'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGIN_OUT = 'LOGIN_OUT'
export const LOGIN_OUT_SUC = 'LOGIN_OUT_SUC'
export const LOGIN_OUT_ERROR = 'LOGIN_OUT_ERROR'

export const REG = 'REG'
export const REG_SUC = 'REG_SUC'
export const REG_ERROR = 'REG_ERROR'

export const GET_USER_INFO = 'GET_USER_INFO'
export const GET_USER_INFO_SUC = 'GET_USER_INFO_SUC'
export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR'

/*weather*/

export const SEARCH_CITY_LIST = 'SEARCH_CITY_LIST'
export const SEARCH_CITY_LIST_SUC = 'SEARCH_CITY_LIST_SUC'
export const SEARCH_CITY_LIST_ERROR = 'SEARCH_CITY_LIST_ERROR'

export const GET_WEATHER_INFO = 'GET_WEATHER_INFO'
export const GET_WEATHER_INFO_SUC = 'GET_WEATHER_INFO_SUC'
export const GET_WEATHER_INFO_ERROR = 'GET_WEATHER_INFO_ERROR'

export const DEL_SEARCH_CITY_ITEM = 'DEL_SEARCH_CITY_ITEM'
export const GET_CITY_LIST = 'GET_CITY_LIST'
export const ADD_SEARCH_CITY_ITEM = 'ADD_SEARCH_CITY_ITEM'

/*note*/

export const GET_NOTE_LIST = 'GET_NOTE_LIST'
export const GET_NOTE_LIST_SUC = 'GET_NOTE_LIST_SUC'
export const GET_NOTE_LIST_ERROR = 'GET_NOTE_LIST_ERROR'
export const DELETE_NOTE_ITEM = 'DELETE_NOTE_ITEM'
export const DELETE_NOTE_ITEM_SUC = 'DELETE_NOTE_ITEM_SUC'
export const DELETE_NOTE_ITEM_ERROR = 'DELETE_NOTE_ITEM_ERROR'
export const ADD_NOTE_ITEM = 'ADD_NOTE_ITEM'
export const ADD_NOTE_ITEM_SUC = 'ADD_NOTE_ITEM_SUC'
export const ADD_NOTE_ITEM_ERROR = 'ADD_NOTE_ITEM_ERROR'
