import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedinUser: null,
  },
  reducers: {
    login(state, action) {},
  },
});

export const userActions = userSlice.actions;

export default userSlice;
