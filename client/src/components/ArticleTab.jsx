import React from 'react';


export default function ArticleTab (props) {
  const { article } = props;

  return (
    <>
      <h1 className="article-title">{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
}