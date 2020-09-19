import React from 'react';
import { useHistory } from 'react-router-dom';

import { deleteArticle } from '../services/articles.js';

export default function ArticleTab (props) {
  const { article } = props;
  const history = useHistory();

  const deleteThisArticle = async () => {
    const articleToDelete = await deleteArticle(article.id);
    history.push('/articles/index');
  }

  return (
    <>
      <h1>Article Tab.</h1>
      <h1 className="article-title">{article.title}</h1>
      <p>{article.content}</p>
      <button onClick={deleteThisArticle}>Delete</button>
    </>
  );
}