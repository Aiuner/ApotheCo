import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { postArticle } from '../services/articles.js';

export default function CreateArticle() {
  const [articles, updateArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const { title, content } = formData;
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changes = {[name]: value};
    setFormData( (formData) => {
      return {...formData, ...changes}
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = await postArticle(formData);
    updateArticles(newArticle);
    history.push(`/articles/${newArticle.id}`);
  }

  return (
    <div className="content-panel">
      <form onSubmit={handleSubmit}>
        <h1>New Article</h1>
        <label>Title:</label>
        <br />
          <input 
            name="title"
            type="text"
            value={title}
            onChange={handleChange} />
        <br />
        <label>Content:</label>
        <br />
          <textarea
            cols="30"
            rows="6"
            value={content}
            name="Content"
            onChange={handleChange}
          />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}