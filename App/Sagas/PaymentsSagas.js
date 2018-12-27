import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import PaymentsActions from '../Redux/PaymentsRedux'

export function* finishPayments(api, action) {
    const { stripetoken } = action
    // make the call to the api
    const response = yield call(api.finishPayments, stripetoken)
    if (response.ok) {
        const accountData = response.data

        // do data conversion here if needed
        yield put(PaymentsActions.finishPaymentsSuccess(accountData))
    } else {
        yield put(PaymentsActions.finishPaymentsFailure())
    }
}