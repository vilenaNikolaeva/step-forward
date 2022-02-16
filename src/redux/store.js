import { configureStore } from '@reduxjs/toolkit';

import userSlice from './user/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
  },
})