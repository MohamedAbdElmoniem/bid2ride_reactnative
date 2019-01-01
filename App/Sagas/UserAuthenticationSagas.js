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

    if (response.ok) {
        const registerationData = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.accountRegisterationSuccess(registerationData))
    } else {
        yield put(UserAuthenitcationActions.accountRegisterationFailure())
    }
}

export function* forgotPassword(api, action) {
    const { email } = action
    // make the call to the api
    const response = yield call(api.forgotPassword, email)


    if (response.ok) {
        const registerationData = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.accountRegisterationSuccess({ status: "sent" }))
    } else {
        yield put(UserAuthenitcationActions.accountRegisterationFailure())
    }
}

export function* getTerms(api, action) {
    // make the call to the api
    const response = yield call(api.getTerms, { email: "eslam@fdsf.com", token: "FsmBe8TZ4hxf9GCgC_NW" })


    if (response.ok) {
        const html = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.getTermsSuccess(html))
    } else {
        yield put(UserAuthenitcationActions.getTermsFailure())
    }
}

export function* getCars(api, action) {
    // make the call to the api
    const response = yield call(api.getCars, { email: "eslam@fdsf.com", token: "FsmBe8TZ4hxf9GCgC_NW" })
    if (response.ok) {
        const carsData = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.getCarsSuccess(carsData))
    } else {
        yield put(UserAuthenitcationActions.getCarsFailure())
    }
}

export function* getCarModel(api, { car }) {
    // make the call to the api
    const response = yield call(api.getCarModel, { email: "eslam@fdsf.com", token: "FsmBe8TZ4hxf9GCgC_NW" }, car.id)
    if (response.ok) {
        const carModelData = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.getCarModelSuccess(carModelData))
    } else {
        yield put(UserAuthenitcationActions.getCarModelFailure())
    }
}

export function* getFcra(api, action) {
    // make the call to the api
    const response = yield call(api.getFcraHtml, { email: "eslam@fdsf.com", token: "FsmBe8TZ4hxf9GCgC_NW" })

    if (response.ok) {
        const html = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.getFcraSuccess(html))
    } else {
        yield put(UserAuthenitcationActions.getFcraFailure())
    }
}

export function* getDisclosure(api, action) {
    // make the call to the api
    const response = yield call(api.getDisclosureHtml, { email: "eslam@fdsf.com", token: "FsmBe8TZ4hxf9GCgC_NW" })

    if (response.ok) {
        const html = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.getDisclosureSuccess(html))
    } else {
        yield put(UserAuthenitcationActions.getDisclosureFailure())
    }
}

export function* getAuthorization(api, action) {
    // make the call to the api
    const response = yield call(api.getAuthorizationHtml, { email: "eslam@fdsf.com", token: "FsmBe8TZ4hxf9GCgC_NW" })

    if (response.ok) {
        const html = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.getAuthorizationSuccess(html))
    } else {
        yield put(UserAuthenitcationActions.getAuthorizationFailure())
    }
}

export function* savePaymentsDriver(api, action) {

    const {stripeTokenDriver} =action
    // make the call to the api
    const response = yield call(api.savePaymentsDriver, stripeTokenDriver)

    if (response.ok) {
        const driverAccountData = response.data
        // do data conversion here if needed
        yield put(UserAuthenitcationActions.savePaymentsDriverSuccess(driverAccountData))
    } else {
        yield put(UserAuthenitcationActions.savePaymentsDriverFailure())
    }
}