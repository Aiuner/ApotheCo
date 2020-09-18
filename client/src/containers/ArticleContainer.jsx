import React from 'react';

import CreateNewComment from '../components/CreateNewComment.jsx';
import ArticleTab from '../components/ArticleTab.jsx';

export default function ArticleContainer(props) {
  const { article } = props;

  return (
    <>
      <ArticleTab article={article} />
      <CreateNewComment />
    </>
  );
}