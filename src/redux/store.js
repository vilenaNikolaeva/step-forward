
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userReducers'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})