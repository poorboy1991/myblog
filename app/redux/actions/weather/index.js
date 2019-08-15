/*
*  @module search bar config
*  @author kai.xiang on 2019-05-22
*  @version 1.0.0
*/

import {
    SEARCH_CITY_LIST,
    SEARCH_CITY_LIST_SUC,
    SEARCH_CITY_LIST_ERROR,
    ADD_SEARCH_CITY_ITEM,
    DEL_SEARCH_CITY_ITEM,
    GET_CITY_LIST,
    GET_WEATHER_INFO,
    GET_WEATHER_INFO_SUC,
    GET_WEATHER_INFO_ERROR,
    createAction
} from '../types'

import {
    lbPostFetch,lbGetFetch
} from '../../utils/fetch'

/*
*  get search item
*  @returns {function} async function
*/

export function getSearchCity(city) {
    return async (dispatch) => {
        dispatch(createAction(SEARCH_CITY_LIST)())
        let res = await lbGetFetch(`/search_city?city=${city}`)
        if(!res.error) {
            dispatch(createAction(SEARCH_CITY_LIST_SUC, 'res')(res.data))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(SEARCH_CITY_LIST_ERROR, 'error')(error))
            throw new LBError(res.code, res.error)
        }
    }
}

/*
*  get weather info
*  @returns {function} async function
*/

export function getWeatherInfo(cityid) {
    return async (dispatch) => {
        dispatch(createAction(GET_WEATHER_INFO)())
        let res = await lbGetFetch('/search_weather', cityid)
        if(!res.error) {
            debugger
            dispatch(createAction(GET_WEATHER_INFO_SUC, 'res')(res.data))
        }else {
            let error = new LBError(res.code, res.error)
            dispatch(createAction(GET_WEATHER_INFO_ERROR, 'error')(error))
            throw new LBError(res.code, res.error)
        }
    }
}


/*
*  get storage list
*  @returns {function} async function
* */

export function getStorageCitys() {
    return async (dispatch) => {
        const localStorage = window.localStorage;
        const city_list = localStorage.getItem('weather_city_list')
        const res = JSON.parse(city_list) || []
        dispatch(createAction(GET_CITY_LIST, 'res')(res))
    }
}

/*
*  get storage list
*  @returns {function} async function
* */

export function addStorageCity(item) {
    return async (dispatch) => {
        const localStorage = window.localStorage
        const list = JSON.parse(localStorage.getItem('weather_city_list'))  || []
        list.unshift(item)
        debugger
        localStorage.setItem('weather_city_list',JSON.stringify(list));
        debugger
        dispatch(createAction(ADD_SEARCH_CITY_ITEM, 'res')(item))
    }
}

/*
*  get storage list
*  @returns {function} async function
* */

export function delStorageCity(item) {
    return async (dispatch) => {
        const localStorage = window.localStorage;
        const list = JSON.parse(localStorage.getItem('weather_city_list'))  || []
        localStorage.setItem('weather_city_list',JSON.stringify(list.filter(city_item => city_item.id !== item.id)));
        dispatch(createAction(DEL_SEARCH_CITY_ITEM, 'res')(item))
    }
}