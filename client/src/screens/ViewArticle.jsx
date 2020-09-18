import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ArticleContainer from '../containers/ArticleContainer.jsx';

import { getOneArticle } from '../services/articles.js'

export default function ViewArticle() {
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect( () => {
    const fetchArticle = async () => {
      const theArticle = await getOneArticle(id);
      setArticle(theArticle);
    }
    fetchArticle(id);
  }, []);


  return (
    <>
      <h1>This is the article viewing page.</h1>
      <ArticleContainer article={article} />
    </>
  );
}