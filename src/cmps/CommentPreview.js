const formatDateTime = require('time-date-formatter')

const CommentPreview = ({ comment }) => {
  return (
    <div>
      <span>{formatDateTime('DD/MM/YYYY', '.', comment.createdAt)}, {formatDateTime('AM/PM', ':', comment.createdAt)}</span>
      {comment.text}
    </div>);
};

export default CommentPreview;
