import React, { useState } from 'react';
import { useHistory as history } from 'react-router-dom';

import { postArticle } from '../services/articles.js';

export default function CreateArticle() {
  const [articles, updateArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const { title, content } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changes = {[name]: value};
    setFormData( (formData) => {
      return {...formData, ...changes}
    });
  }

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    console.log(formData);
    const newArticle = await postArticle(formData);
    updateArticles(newArticle);
    history.push(`/articles/${newArticle.id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Article</h1>
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