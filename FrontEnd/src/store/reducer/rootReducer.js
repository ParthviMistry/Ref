
// Imports
import { combineReducers } from 'redux'

// App Imports
import jobReducer from './jobReducer'

const reducer= combineReducers({
  jobs: jobReducer
})

export default reducer