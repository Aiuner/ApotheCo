import React from 'react';

import CreateNewComment from '../components/CreateNewComment.jsx';

export default function CommentsTab(props) {
  const { comments, handleSubmitComment } = props;

  return (
    <>
      {comments.map((comment) => (<React.Fragment key={comment.id}>
          <div className="comments">
            <h2 className="comment-tab-titles">{comment.title}</h2>
            <p className="comment-text">{comment.content}</p>
          </div>
        </React.Fragment>
      ))}
      <CreateNewComment comments={comments} handleSubmitComment={handleSubmitComment} />
    </>
  );
}