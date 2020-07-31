import { combineReducers } from 'redux'
import fetchUserReducerByIndex from './fetchUser'
import fetchNotebook from './fetchNotebook'

export default combineReducers({ 
  posts: fetchUserReducerByIndex,
  postsnotebook:  fetchNotebook
})