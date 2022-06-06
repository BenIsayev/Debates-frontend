import {useState} from 'react';

const AddComment = ({addComment}) => {
  const [commentText, setCommentText] = useState('');

  const addCommentHandler = (ev) => {
    ev.preventDefault();
    addComment(commentText);
    setCommentText('');
  };

  const commentTypeHandler = (ev) => {
    setCommentText(ev.target.value);
  };

  return (
    <form onSubmit={addCommentHandler}>
      <input type="text" onChange={commentTypeHandler} value={commentText} />
      <button>Add</button>
    </form>
  );
};

export default AddComment;
