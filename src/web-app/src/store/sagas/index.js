/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:10:29
 * @modify date 2019-08-18 09:10:29
 * @desc Implementation of saga watchers.
 */

import { takeEvery } from 'redux-saga/effects';
import { logoutSaga, checkAuthTimeoutSaga, authSaga } from './auth';

import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_USER, authSaga);
}




