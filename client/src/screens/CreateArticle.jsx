import React, { useState } from 'react';
import { useHistory as history } from 'react-router-dom';

import { postArticle } from '../services/articles.js';

export default function CreateArticle() {
  const [articles, updateArticles] = useState([]);
  const [formData, setFormData] = useState({});
  const { title, content } = formData;

  const handleSubmit = async (e, formData) => {
    e.preventDefault();
    const newArticle = await postArticle(formData);
    updateArticles(newArticle);
    history.push('/articles/index');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Article</h1>
      <label>
        Title:
        <input 
          type="text"
          value={title}
          onChange={(e) => setFormData(e.target.value)} />
      </label>
      <label>
        Content:
        <input 
          type="text"
          value={content}
          onChange={(e) => setFormData(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
}