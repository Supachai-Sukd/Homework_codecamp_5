import { combineReducers } from 'redux'
import fetchUserReducerByIndex from './fetchUser'
import fetchNotebook from './fetchNotebook'
import fetchPhones from './reducePhone'

export default combineReducers({ 
  posts: fetchUserReducerByIndex,
  postsnotebook:  fetchNotebook,
  posts_phone: fetchPhones
})