import CommentPreview from './CommentPreview';

const CommentList = ({debate}) => {
  return (
    <div>
      <div className="comments-title">תגובות</div>

      {debate.comments.length ? (
        debate.comments.map((comment) => {
          return <CommentPreview key={comment._id} comment={comment} />;
        })
      ) : (
        <div>No comments yet..</div>
      )}
    </div>
  );
};

export default CommentList;
