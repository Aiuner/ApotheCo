import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../services/articles.js';

export default function Index() {
  const [articles, setArticles] = useState([]);

  useEffect( () => {
    const fetchArticles = async () => {
      const allArticles = await getAllArticles();
      setArticles(allArticles);
    }
    fetchArticles();
  }, []);

  return (
    <div className="content-panel">
      <h1>This is the article index.</h1>
      {articles.map((article) => (<React.Fragment key={article.id}>
          <div className="articles">
            <Link to={`/articles/${article.id}`}>
              <h2 className="index-article-titles">{article.title}</h2>
            </Link>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}