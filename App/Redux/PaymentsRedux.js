import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    saveStripeTokenForPayments: ['stripetoken'],
    finishPaymentsRequest: ['stripetoken'],
    finishPaymentsSuccess: ['accountData'],
    finishPaymentsFailure: []
})

export const PaymentsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetching: null,
    error: null,
    stripetoken: null,
    accountData: null
})

/* ------------- Selectors ------------- */

export const PaymentsSelectors = {
    isError: state => state.PaymentsState.error,
    isFetching: state => state.PaymentsState.fetching,
    stripeToken: state => state.PaymentsState.stripetoken,
    latestAccountData: state => state.PaymentsState.accountData
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const saveStripeTokenForPayments = (state, { stripetoken }) =>
    state.merge({ fetching: false, error: false, stripetoken })

export const finishPaymentsRequest = (state, { stripetoken }) =>
    state.merge({ fetching: true })


export const finishPaymentsSuccess = (state, { accountData }) =>
    state.merge({ fetching: false, accountData, error: false })


export const finishPaymentsFailure = (state) =>
    state.merge({ fetching: false, accountData: null, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SAVE_STRIPE_TOKEN_FOR_PAYMENTS]: saveStripeTokenForPayments,
    [Types.FINISH_PAYMENTS_REQUEST]: finishPaymentsRequest,
    [Types.FINISH_PAYMENTS_SUCCESS]: finishPaymentsSuccess,
    [Types.FINISH_PAYMENTS_FAILURE]: finishPaymentsFailure,
})
