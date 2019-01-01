import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UserAuthenitcationRedux'

test('getTermsRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.getTermsRequest())

  expect(state.htmlTerms).toBe(null)
  expect(state.error).toBeNull()
})

test('getTermsSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.getTermsSuccess())

  expect(state.htmlTerms).toBe(undefined)
  expect(state.error).toBe(false)
})

test('getTermsFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.getTermsFailure())

  expect(state.htmlTerms).toBe(null)
  expect(state.error).toBe(true)
})


////////////////////////////

test('getCarsRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarsRequest())

  expect(state.carsList).toBe(null)
  expect(state.error).toBeNull()
})

test('getCarsSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarsSuccess())

  expect(state.carsList).toBe(undefined)
  expect(state.error).toBe(false)
})

test('getCarsFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarsFailure())

  expect(state.carsList).toBe(null)
  expect(state.error).toBe(true)
})

////////////////////////////

test('getCarModelRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarModelRequest())

  expect(state.carModelList).toBe(null)
  expect(state.fetching).toBe(true)
  expect(state.error).toBeNull()
})

test('getCarModelSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarModelSuccess())

  expect(state.carModelList).toBe(undefined)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
})

test('getCarModelFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarModelFailure())

  expect(state.carModelList).toBe(null)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})

////////////////////////////

test('getCarModelRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarModelRequest())

  expect(state.carModelList).toBe(null)
  expect(state.fetching).toBe(true)
  expect(state.error).toBeNull()
})

test('getCarModelSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarModelSuccess())

  expect(state.carModelList).toBe(undefined)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
})

test('getCarModelFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.getCarModelFailure())

  expect(state.carModelList).toBe(null)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})

////////////////////////////

test('getFcraRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.getFcraRequest())

  expect(state.fcraHtml).toBe(null)
  expect(state.fetching).toBe(true)
  expect(state.error).toBeNull()
})

test('getFcraSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.getFcraSuccess())

  expect(state.fcraHtml).toBe(undefined)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
})

test('getFcraFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.getFcraFailure())

  expect(state.fcraHtml).toBe(null)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})


////////////////////////////

test('getDisclosureRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.getDisclosureRequest())

  expect(state.disclosureHtml).toBe(null)
  expect(state.fetching).toBe(true)
  expect(state.error).toBeNull()
})

test('getDisclosureSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.getDisclosureSuccess())

  expect(state.disclosureHtml).toBe(undefined)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
})

test('getDisclosureFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.getDisclosureFailure())

  expect(state.disclosureHtml).toBe(null)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})

////////////////////////////

test('getAuthorizationRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.getAuthorizationRequest())

  expect(state.authorizationHtml).toBe(null)
  expect(state.fetching).toBe(true)
  expect(state.error).toBeNull()
})

test('getAuthorizationSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.getAuthorizationSuccess())

  expect(state.authorizationHtml).toBe(undefined)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(false)
})

test('getAuthorizationFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.getAuthorizationFailure())

  expect(state.authorizationHtml).toBe(null)
  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})

