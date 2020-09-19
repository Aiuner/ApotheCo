import React, { useState, useEffect } from 'react';

import CreateNewComment from '../components/CreateNewComment.jsx';

import { getAllComments } from '../services/comments.js'

export default function CommentsTab(props) {
  const [comments, setComments] = useState([]);
  const { id } = props;

  useEffect( () => {
    const fetchComments = async () => {
      const allComments = await getAllComments(id);
      console.log(allComments);
      setComments(allComments);
    }
    fetchComments(id);
  }, []);


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
      <CreateNewComment id={id} />
    </>
  );
}