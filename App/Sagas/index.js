import { takeLatest, all } from 'redux-saga/effects'
import FixtureAPI from '../Services/FixtureApi'
import UserAuthenticationService from '../Services/UserAuthentication'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { AccountAuthenticationTypes } from '../Redux/UserAuthenitcationRedux'

/* ------------- Sagas ------------- */

import { accoutLogin, accoutRegisteration, forgotPassword } from './UserAuthenticationSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const UserAuthenticationApi = DebugConfig.useFixtures ? FixtureAPI : UserAuthenticationService.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(AccountAuthenticationTypes.ACCOUNT_REGISTERATION_REQUEST, accoutRegisteration, UserAuthenticationApi),
    takeLatest(AccountAuthenticationTypes.ACCOUNT_LOGIN_REQUEST, accoutLogin, UserAuthenticationApi),
    takeLatest(AccountAuthenticationTypes.FORGOT_PASSWORD_REQUEST, forgotPassword, UserAuthenticationApi)
  ])
}
