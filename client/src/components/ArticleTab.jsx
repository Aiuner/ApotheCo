import React from 'react';

export default function ArticleTab (props) {
  const { article, deleteThisArticle, setTabView, currentUser } = props;

  return (
    <>
      <h1 className="article-title">{article.title}</h1>
      <p className="article-content">{article.content}</p>
      { currentUser && 
        <>
        <button onClick={() => setTabView("Edit")}>Edit</button>
        <button onClick={deleteThisArticle}>Delete</button>
        </>}
    </>
  );
}