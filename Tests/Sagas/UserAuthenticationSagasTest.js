import FixtureAPI from '../../App/Services/FixtureApi'
import { put, call } from 'redux-saga/effects'
import { accoutLogin } from '../../App/Sagas/UserAuthenticationSagas'
import AuthenticationActions from '../../App/Redux/UserAuthenitcationRedux'
import { path } from 'ramda'
import UserAuthenticationService from "../../App/Services/UserAuthentication";

const stepper = (fn) => (mock) => fn.next(mock).value

const action = {
    loginData
}

const loginData = {
    "email": "cenkerdemir@icloud.com",
    "password": "bid2ride"
}
const _UserAuthenticationService = UserAuthenticationService.create()

test('login', () => {
    const response = _UserAuthenticationService.accountLogin(loginData)
    const step = stepper(accoutLogin(_UserAuthenticationService, action))
    // first step API
    step()
    // Second step successful return
    const stepResponse = step(response)
    // Get the avatar Url from the response
    expect(stepResponse).toEqual(put(AuthenticationActions.accountLoginSuccess({})))
})

