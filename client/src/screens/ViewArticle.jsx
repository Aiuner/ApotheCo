import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getOneArticle } from '../services/articles.js'

export default function ViewArticle() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect( () => {
    const fetchArticle = async (id) => {
      const theArticle = await getOneArticle(id);
      setArticle(theArticle);
    }
    fetchArticle();
  }, []);


  return (
    <h1>This is the article viewing page.</h1>
  );
}