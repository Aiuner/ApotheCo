import React, { useState } from 'react';

export default function CreateNewComment(props) {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const { title, content } = formData;
  const { handleSubmitComment } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changes = {[name]: value};
    setFormData( (formData) => {
      return {...formData, ...changes}
    });
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmitComment(formData);
    }}>
      <h1>New Comment</h1>
      <label>Title:</label>
      <br />
        <input 
          className="comment-title"
          name="title"
          type="text"
          value={title}
          onChange={handleChange} />
      <br />
      <label>Content:</label>
      <br />
        <textarea
          className="comment-content"
          cols="30"
          rows="6"
          value={content}
          name="content"
          onChange={handleChange}
        />
      <br />
      <button>Submit</button>
    </form>
  );
}