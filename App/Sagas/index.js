import { takeLatest, all } from 'redux-saga/effects'
import FixtureAPI from '../Services/FixtureApi'
import UserAuthenticationService from '../Services/UserAuthentication'
import PaymentsService from '../Services/Payments'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { AccountAuthenticationTypes } from '../Redux/UserAuthenitcationRedux'
import { PaymentsTypes, finishPaymentsFailure } from '../Redux/PaymentsRedux'

/* ------------- Sagas ------------- */

import { accoutLogin, accoutRegisteration, forgotPassword, getTerms, getCars, getCarModel, getFcra } from './UserAuthenticationSagas'
import { finishPayments } from './PaymentsSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const UserAuthenticationApi = DebugConfig.useFixtures ? FixtureAPI : UserAuthenticationService.create()
const PaymentsApi = DebugConfig.useFixtures ? FixtureAPI : PaymentsService.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(AccountAuthenticationTypes.ACCOUNT_REGISTERATION_REQUEST, accoutRegisteration, UserAuthenticationApi),
    takeLatest(AccountAuthenticationTypes.ACCOUNT_LOGIN_REQUEST, accoutLogin, UserAuthenticationApi),
    takeLatest(AccountAuthenticationTypes.FORGOT_PASSWORD_REQUEST, forgotPassword, UserAuthenticationApi),
    takeLatest(AccountAuthenticationTypes.GET_TERMS_REQUEST, getTerms, UserAuthenticationApi),
    takeLatest(AccountAuthenticationTypes.GET_CARS_REQUEST, getCars, UserAuthenticationApi),
    takeLatest(AccountAuthenticationTypes.GET_CAR_MODEL_REQUEST, getCarModel, UserAuthenticationApi),
    takeLatest(AccountAuthenticationTypes.GET_FCRA_REQUEST, getFcra, UserAuthenticationApi),
    takeLatest(PaymentsTypes.FINISH_PAYMENTS_REQUEST, finishPayments, PaymentsApi),

  ])
}
