import React from 'react';

export default function ArticleTab (props) {
  const { article, deleteThisArticle, setTabView } = props;

  return (
    <>
      <h1>Article Tab.</h1>
      <h1 className="article-title">{article.title}</h1>
      <p>{article.content}</p>
      <button onClick={() => setTabView("Edit")}>Edit</button>
      <button onClick={deleteThisArticle}>Delete</button>
    </>
  );
}