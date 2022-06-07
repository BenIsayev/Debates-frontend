import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDebate, addComment } from '../store/debate-actions';

import LoadingSpinner from '../cmps/LoadingSpinner';
import DebatePreview from '../cmps/DebatePreview';
import AddComment from '../cmps/AddComment';

const DebateMain = () => {
  const dispatch = useDispatch();
  const debateId = useParams().debateId;
  const debate = useSelector((state) => state.debate.currDebate);
  const isFinishedDebates = useSelector(
    (state) => state.debate.isFinishedDebates
  );
  const isLoadingDebate = useSelector((state) => state.debate.isLoadingDebate);

  useEffect(() => {
    dispatch(fetchDebate(debateId));
  }, [debateId, dispatch]);

  const addCommentHandler = (comment) => {
    dispatch(addComment(comment));
  };

  const linkToHome = <NavLink to="/">Go to home page</NavLink>;

  if (debate === undefined && isFinishedDebates && !isLoadingDebate) {
    return (
      <section className="finished-debates">
        <h2>Congradulations!</h2>
        <span>You finished all the debates!</span>
        {linkToHome}
      </section>
    );
  } else if (debate === undefined && !isLoadingDebate) {
    return (
      <section>
        <h2>The debate you are looking for doesn't exist</h2>
        {linkToHome}
      </section>
    );
  }

  return (
    <section className="main-debate-page">
      {JSON.stringify(debate)}
      {!debate?._id && <LoadingSpinner />}
      {debate?._id && <DebatePreview debate={debate} />}
      <AddComment addComment={addCommentHandler} />
    </section>
  );
};

export default DebateMain;
