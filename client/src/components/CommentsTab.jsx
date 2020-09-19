import React from 'react';

import CreateNewComment from '../components/CreateNewComment.jsx';

export default function CommentsTab(props) {
  const { comments, handleSubmit } = props;

  return (
    <>
      <h1>This is the comments tab.</h1>
      {comments.map((comment) => (<React.Fragment key={comment.id}>
          <div className="comments">
            <h2 className="comment-tab-titles">{comment.title}</h2>
            <p className="comment-text">{comment.content}</p>
          </div>
        </React.Fragment>
      ))}
      <CreateNewComment comments={comments} handleSubmit={handleSubmit} />
    </>
  );
}