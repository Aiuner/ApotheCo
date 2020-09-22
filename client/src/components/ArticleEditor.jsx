import React, { useState, useEffect } from 'react'

export default function ArticleEditor(props) {
  const { article, editThisArticle } = props;
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });
  const { title, content } = formData;

  useEffect(() => {
    const prefillForm = () => {
      setFormData({
        title: article.title,
        content: article.content
      })
    }
    if (article) {
      prefillForm();
    }
  }, [article])

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changes = {[name]: value};
    setFormData( (formData) => {
      return {...formData, ...changes}
    });
  }

  return (
    <>
      <h1>Edit "<em>{title}</em>"</h1>

      <form onSubmit={editThisArticle}>
        <input
          className="article-title"
          type="text"
          value={title}
          placeholder="Article Title"
          name="title"
          onChange={handleChange}
        />
        <br />
        <textarea
          className="article-content"
          cols="30"
          rows="6"
          value={content}
          name="content"
          onChange={handleChange}
        />
        <br />
        <button className="save-button" type="submit">Save Changes</button>
      </form>
    </>
  )
}
