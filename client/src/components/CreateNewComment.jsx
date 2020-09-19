import React, { useState } from 'react';

export default function CreateNewComment(props) {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const { title, content } = formData;
  const { handleSubmit } = props;

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
      handleSubmit(formData);
    }}>
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