import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/UserAuthenitcationRedux'

test('accountLoginRequest', () => {
  const state = reducer(INITIAL_STATE, Actions.accountLoginRequest())

  expect(state.fetching).toBe(true)
  expect(state.error).toBeNull()
})

test('accountLoginSuccess', () => {
  const state = reducer(INITIAL_STATE, Actions.accountLoginSuccess())

  expect(state.fetching).toBe(false)
  expect(state.error).toBeNull()
})

test('accountLoginFailure', () => {
  const state = reducer(INITIAL_STATE, Actions.accountLoginFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
})