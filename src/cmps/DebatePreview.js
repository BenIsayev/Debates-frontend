import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CommentList from './CommentList';
const commentsIcon = require('../assets/img/comment.png');

const DebatePreview = ({ debate }) => {
  const nextDebateId = useSelector((state) => state.debate.nextDebateId);
  return (
    <section className="debate-preview">
      <div className="timer">
        <span>00:00</span>
        <button>+1</button>
      </div>
      <div className="debate-question">
        <h2>{debate.question}</h2>
      </div>
      <NavLink to={`/debate/${nextDebateId}`} className="skip-btn btn">
        דלג
      </NavLink>

      <a href="/" className="comments-btn">
        <img src={commentsIcon} alt="" />
      </a>

      <CommentList debate={debate} />
      {/* {isShowComments && <CommentList debate={debate} />} */}
    </section>
  );
};

export default DebatePreview;
