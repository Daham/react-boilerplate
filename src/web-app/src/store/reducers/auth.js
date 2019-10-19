/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:02:53
 * @modify date 2019-08-18 09:02:53
 * @desc Implementation of auth reducer and support functions.
 */

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : !!(false & localStorage.getItem('user_id'))
};

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true })
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        isAuthenticated: true
    })
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isAuthenticated: false
    })
};

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null,
        isAuthenticated: false
    })
};

const ssoStart = (state, action) => {
    return updateObject(state, { error: null, loading: true })
};

const ssoSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        isAuthenticated: true
    })
};

const ssoFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        isAuthenticated: false
    })
};

const ssoLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null,
        loading: false,
        isAuthenticated: false
    })
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_INITIATE_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }

};

export default reducer;