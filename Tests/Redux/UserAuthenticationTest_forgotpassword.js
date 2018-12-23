import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UserAuthenitcationRedux'

test('forgotPasswordRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.forgotPasswordRequest())

  expect(state.sendingForgotPasswordRequest).toBe(true)
  expect(state.status).toBeNull()
  expect(state.error).toBeNull()
})

test('forgotPasswordSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.forgotPasswordSuccess())

  expect(state.sendingForgotPasswordRequest).toBe(false)
  expect(state.error).toBeNull()
  expect(state.status).toBeUndefined()
})

test('forgotPasswordFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.forgotPasswordFailure())

  expect(state.sendingForgotPasswordRequest).toBe(false)
  expect(state.error).toBe(true)
  expect(state.status).toBeNull()
})