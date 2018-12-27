import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UserAuthenitcationRedux'

test('accountRegisterationRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.accountRegisterationRequest())

  expect(state.fetching).toBe(true)
  expect(state.error).toBeNull()
})

test('accountRegisterationSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.accountRegisterationSuccess())

  expect(state.fetching).toBe(false)
  expect(state.error).toBeNull()
})

test('accountRegisterationFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.accountRegisterationFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})