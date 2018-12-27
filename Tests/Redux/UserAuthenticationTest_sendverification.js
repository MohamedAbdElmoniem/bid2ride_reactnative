import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UserAuthenitcationRedux'

test('sendVerificationReuqest', () => {
  const state = reducer(INITIAL_STATE, Actions.sendVerificationRequest())

  expect(state.sendingVerification).toBe(true)
  expect(state.error).toBeNull()
})

test('sendVerificationSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.sendVerificationSuccess())

  expect(state.sendingVerification).toBe(false)
  expect(state.error).toBeNull()
})

test('sendVerificationFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.sendVerificationFailure())

  expect(state.sendingVerification).toBe(false)
  expect(state.error).toBe(true)
})