/*
*  @file reducer utils js
*  @author kai.xiang on 2019-01-25
*  @version 1.0.0
*/

/**
 * helper function creating reducer
 * @param {object} initialState - initialState
 * @param {object} handlers - handlers
 * @returns {function} reducer
 */

export function createReducer(initialState, handles) {
    return function (state = initialState, action) {
        if(Object.hasOwnProperty.call(handles, action.type)) {
            return handles[action.type](state, action)
        }
        return state
    }
}
