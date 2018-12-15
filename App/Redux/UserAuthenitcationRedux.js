import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    accountLoginRequest: ['loginData'],
    accountLoginSuccess: ['accountData'],
    accountLoginFailure: null,

    accountRegisterationRequest: ['registerationRequestData'],
    accountRegisterationSuccess: ['registerationData'],
    accountRegisterationFailure: null

})

export const AccountAuthenticationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    accountData: null,
    registerationData: null,
    fetching: null,
    error: null,
})

/* ------------- Selectors ------------- */

export const UserAuthenticationSelectors = {
    selectAccountData: state => state.userAuthenticationState.accountData,
    selectRegisterationData: state => state.userAuthenticationState.registerationData,
    isFetching: state => state.userAuthenticationState.fetching,
    isError: state => state.userAuthenticationState.error
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { loginData }) =>
    state.merge({ fetching: true, loginData })

export const registerationRequest = (state, { registerationRequestData }) =>
    state.merge({ fetching: true })

// successful avatar lookup
export const success = (state, action) => {
    const { accountData } = action
    return state.merge({ fetching: false, error: null, accountData })
}

export const registerationSuccess = (state, action) => {
    const { registerationData } = action
    return state.merge({ fetching: false, error: null, registerationData })
}

// failed to get the avatar
export const failure = (state) =>
    state.merge({ fetching: false, error: true, accountData: null })

export const registerationFailure = (state) =>
    state.merge({ fetching: false, error: true, registerationData: null })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACCOUNT_LOGIN_REQUEST]: request,
    [Types.ACCOUNT_LOGIN_SUCCESS]: success,
    [Types.ACCOUNT_LOGIN_FAILURE]: failure,
    [Types.ACCOUNT_REGISTERATION_REQUEST]: registerationRequest,
    [Types.ACCOUNT_REGISTERATION_SUCCESS]: registerationSuccess,
    [Types.ACCOUNT_REGISTERATION_FAILURE]: registerationFailure
})
