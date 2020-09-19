import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { postComment } from '../services/comments.js';

export default function CreateNewComment() {
  const [comments, updateComments] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const { title, content } = formData;
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changes = {[name]: value};
    setFormData( (formData) => {
      return {...formData, ...changes}
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const newComment = await postComment(formData, id);
    updateComments(newComment);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Comment</h1>
      <label>Title:</label>
        <input 
          name="title"
          type="text"
          value={title}
          onChange={handleChange} />
      <label>Content:</label>
        <input 
          name="content"
          type="text"
          value={content}
          onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}