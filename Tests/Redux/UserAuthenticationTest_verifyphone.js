import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UserAuthenitcationRedux'

test('verifyPhoneRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.verifyPhoneRequest())

  expect(state.verifiing).toBe(true)
  expect(state.error).toBeNull()
})

test('verifyPhoneSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.verifyPhoneSuccess())

  expect(state.verifiing).toBe(false)
  expect(state.error).toBeNull()
})

test('verifyPhoneFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.verifyPhoneFailure())

  expect(state.verifiing).toBe(false)
  expect(state.error).toBe(true)
})