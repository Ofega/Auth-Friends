import { combineReducers } from 'redux'
import { friendsReducer } from './friends';
import { userReducer } from './user';


const reducer = combineReducers({
  friends: friendsReducer,
  user: userReducer
})

export default reducer
