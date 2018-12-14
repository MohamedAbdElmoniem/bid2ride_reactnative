import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import UserAuthenticationService from '../Services/UserAuthentication'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { AccountAuthenticationTypes } from '../Redux/UserAuthenitcationRedux'

/* ------------- Sagas ------------- */

import { accoutLogin } from './UserAuthenticationSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()
const UserAuthenticationApi = DebugConfig.useFixtures ? FixtureAPI : UserAuthenticationService.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([

    takeLatest(AccountAuthenticationTypes.ACCOUNT_LOGIN_REQUEST, accoutLogin, UserAuthenticationApi)
  ])
}
