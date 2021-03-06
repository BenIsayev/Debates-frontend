import { debateService } from '../services/debate-service.js';
import { debateActions } from './debate-slice';

export const fetchDebateIds = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      return await debateService.fetchDebateIds();
    };
    try {
      const debateIds = await fetchData();
      dispatch(debateActions.replaceDebateIds({ debateIds }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDebate = (debateId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      return await debateService.fetchDebateById(debateId);
    };
    try {
      const debate = debateId === 'finished' ? undefined : await fetchData();
      dispatch(debateActions.replaceDebate({ debate }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addComment = (commentText) => {
  return async (dispatch, getState) => {
    const { currDebate } = getState().debate;
    const sendCommentData = async () => {
      const comment = debateService.createComment(commentText); // When a user connected send the user as a second param
      const updatedDebate = await debateService.addComment(
        currDebate._id,
        comment
      );
      dispatch(debateActions.setCurrDebate({ debate: updatedDebate }));
    };
    try {
      await sendCommentData();
    } catch (err) {
      console.error(err);
    }
  };
};
