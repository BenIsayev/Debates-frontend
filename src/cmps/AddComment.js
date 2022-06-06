import { useState } from "react"

const AddComment = ({ debateId, addComment }) => {

    const [commentText, setCommentText] = useState('')

    const addCommentHandler = (ev) => {
        ev.preventDefault();
        addComment(commentText)

    }

    const commentTypeHandler = (ev) => {

        setCommentText(ev.target.value)
    }

    return (
        <form onSubmit={addCommentHandler}>
            <input type="text" onChange={commentTypeHandler} />
            {commentText}
        </form>
    )
}

export default AddComment