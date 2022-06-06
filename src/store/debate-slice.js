import {createSlice} from '@reduxjs/toolkit';

const debateSlice = createSlice({
  name: 'debate',
  initialState: {
    currDebate: {},
    debateIds: [],
    nextDebateId: '',
    isFinishedDebates: false,
    isLoadingDebate: false,
  },
  reducers: {
    replaceDebate(state, action) {
      if (state.nextDebateId === 'finished') state.isFinishedDebates = true;
      if (!state.isFinishedDebates) state.isLoadingDebate = true;
      state.nextDebateId = state.debateIds.pop();
      state.currDebate = action.payload.debate;
      state.isLoadingDebate = false;
    },
    replaceDebateIds(state, action) {
      state.nextDebateId = action.payload.debateIds.pop();
      state.debateIds = action.payload.debateIds;
      state.debateIds.unshift('finished');
    },
    setCurrDebate(state, action) {
      state.currDebate = action.payload.debate;
    },
  },
});

export const debateActions = debateSlice.actions;

export default debateSlice;
