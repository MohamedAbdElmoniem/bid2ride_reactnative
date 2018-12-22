import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    accountLoginRequest: ['loginData'],
    accountLoginSuccess: ['accountData'],
    accountLoginFailure: null,

    accountRegisterationRequest: ['registerationRequestData'],
    accountRegisterationSuccess: ['registerationData'],
    accountRegisterationFailure: null,

    forgotPasswordRequest: ['email'],
    forgotPasswordSuccess: [],
    forgotPasswordFailure: [],

    sendVerificationReuqest: [],
    sendVerificationSuccess: [],
    sendVerificationFailure: [],

    verifyPhoneReuqest: ['verificationCode'],
    verifyPhoneSuccess: ['registerationData'],
    verifyPhoneFailure: ['error']

})

export const AccountAuthenticationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    accountData: null,
    registerationData: null,
    loginData: null,
    fetching: null,
    error: null,
    sendingForgotPasswordRequest: null,
    status: null,
    verificationCode: null,
    sendingVerification: null,
    verifiing: null,
    verifingSuccess: null,
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

export const forgotPasswordRequest = (state, action) =>
    state.merge({ sendingForgotPasswordRequest: true, status: null })

export const forgotPasswordSuccess = (state, action) => {
    const { status } = action
    return state.merge({ sendingForgotPasswordRequest: false, error: null, status })
}

export const forgotPasswordFailure = (state) =>
    state.merge({ sendingForgotPasswordRequest: false, error: true, status: null })

export const sendVerificationReuqest = (state) =>
    state.merge({ sendingVerification: true, error: null })

export const sendVerificationSuccess = (state) =>
    state.merge({ sendingVerification: false, error: null })

export const sendVerificationFailure = (state) =>
    state.merge({ sendingVerification: false, error: true })

export const verifyPhoneReuqest = (state, { verificationCode }) =>
    state.merge({ verifiing: true, verificationCode })
    
export const verifyPhoneSuccess = (state, { registerationData }) =>
    state.merge({ verifiing: false, registerationData })

export const verifyPhoneFailure = (state) =>
    state.merge({ verifiing: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ACCOUNT_LOGIN_REQUEST]: request,
    [Types.ACCOUNT_LOGIN_SUCCESS]: success,
    [Types.ACCOUNT_LOGIN_FAILURE]: failure,
    [Types.ACCOUNT_REGISTERATION_REQUEST]: registerationRequest,
    [Types.ACCOUNT_REGISTERATION_SUCCESS]: registerationSuccess,
    [Types.ACCOUNT_REGISTERATION_FAILURE]: registerationFailure,
    [Types.FORGOT_PASSWORD_REQUEST]: forgotPasswordRequest,
    [Types.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
    [Types.FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure
})
