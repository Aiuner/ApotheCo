import React, { useState } from 'react';
import { useHistory as history } from 'react-router-dom';

import { postArticle } from '../services/articles.js';

export default function CreateArticle() {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  })
  const { title, content } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const submitArticle = async (formData) => {
    const newArticle = await postArticle(formData);
    setArticles(prevState => [...prevState, newArticle]);
    history.push('/articles/index')
  }

  return (
    <form onSubmit={submitArticle}>
      <h1>New Article</h1>
      <label>
        Title:
        <input 
          type="text"
          value={title}
          onChange={handleChange} />
      </label>
      <label>
        Content:
        <input 
          type="text"
          value={content}
          onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}