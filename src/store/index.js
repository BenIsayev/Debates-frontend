import {configureStore} from '@reduxjs/toolkit';
// import uiSlice from "./ui-slice";
import debateSlice from './debate-slice';
import userSlice from './user-slice';

const store = configureStore({
  reducer: {
    // ui: uiSlice.reducer,
    debate: debateSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
