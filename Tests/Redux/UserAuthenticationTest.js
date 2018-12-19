// @flow

import { createStore } from 'redux'
import { rootReducer } from '../../App/Redux'
import Actions, {
UserAuthenticationSelectors
} from '../../App/Redux/UserAuthenitcationRedux'

const EMAIL = "xx@xx.com"
const PASSWORD = "xxxxxxxxx"

describe('user authentication redux state', () => {
    let store
    beforeEach(() => {
      store = createStore(rootReducer)
    })
  
    it('should set fetching to true,  to false, and error to null when making put request', () => {
      store.dispatch(Actions.accountLoginRequest({EMAIL,PASSWORD}))
      const state = store.getState()
  
      expect(UserAuthenticationSelectors.isFetching(state)).toEqual(true)
      expect(UserAuthenticationSelectors.isError(state)).toEqual(null)

    })
  })
  