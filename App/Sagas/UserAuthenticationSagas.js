import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import UserAuthenitcationActions from '../Redux/UserAuthenitcationRedux'

export function* accoutLogin(api, action) {
    const { loginData } = action
    // make the call to the api
    const response = yield call(api.accountLogin, loginData)
    if (response.ok) {
        const accountData = response.data

        // do data conversion here if needed
        yield put(UserAuthenitcationActions.accountLoginSuccess(accountData))
    } else {
        yield put(UserAuthenitcationActions.accountLoginFailure())
    }
}

export function* accoutRegisteration(api, action) {
    const { registerationRequestData } = action
    // make the call to the api
    const response = yield call(api.accountRegisteration, registerationRequestData)
    
    debugger
    if (response.ok) {
        const registerationData = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.accountRegisterationSuccess(registerationData))
    } else {
        yield put(UserAuthenitcationActions.accountRegisterationFailure())
    }
}
