import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    accountLoginRequest: ['loginData'],
    accountLoginSuccess: ['accountData'],
    accountLoginFailure: null
})

export const AccountAuthenticationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    accountData: null,
    fetching: null,
    error: null,
})

/* ------------- Selectors ------------- */

export const UserAuthenticationSelectors = {
    selectAccountData: state => state.userAuthenticationState.accountData,
    isFetching: state => state.userAuthenticationState.fetching,
    isError: state => state.userAuthenticationState.error
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { loginData }) =>
    state.merge({ fetching: true, loginData, avatar: null })

// successful avatar lookup
export const success = (state, action) => {
    const { accountData } = action
    return state.merge({ fetching: false, error: null, accountData })
}

// failed to get the avatar
export const failure = (state) =>
    state.merge({ fetching: false, error: true, accountData: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACCOUNT_LOGIN_REQUEST]: request,
    [Types.ACCOUNT_LOGIN_SUCCESS]: success,
    [Types.ACCOUNT_LOGIN_FAILURE]: failure
})
