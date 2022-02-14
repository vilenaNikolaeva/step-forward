// import rootReducer from './rootReducer';

// export const store = createStore(rootReducer);

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userReducers'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})