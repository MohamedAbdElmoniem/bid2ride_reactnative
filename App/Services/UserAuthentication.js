// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://bid2ride-staging.herokuapp.com/api/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      "Content-Type": "application/json"
    },
    // 30 second timeout...
    timeout: 30000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const accountLogin = (data) => api.post('v1/sessions', data)
  const accountRegisteration = (data) => api.post('v1/registrations', data)
  const forgotPassword = (data) => api.post('v1/passwords', data)
  const sendVerificationCode = (data, headersObject) => {
    api.setHeader('X-User-Email', headersObject.email)
    api.setHeader('X-User-Token', headersObject.token)
    return api.post('v1/phone_number_verifications')
  }
  const verifyPhoneNumber = (data, headersObject) => {
    api.setHeader('X-User-Email', headersObject.email)
    api.setHeader('X-User-Token', headersObject.token)
    return api.put('v1/phone_number_verifications', data)
  }

  const getTerms = (headersObject) => {
    api.setHeader('X-User-Email', headersObject.email)
    api.setHeader('X-User-Token', headersObject.token)
    return api.get('v1/legal_documents/driver_terms_of_service')
  }

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    accountLogin,
    accountRegisteration,
    forgotPassword,
    sendVerificationCode,
    verifyPhoneNumber,
    getTerms
  }
}

// let's return back our create method as the default.
export default {
  create
}
