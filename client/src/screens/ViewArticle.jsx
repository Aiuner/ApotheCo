import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CommentsTab from '../components/CommentsTab.jsx';
import ArticleTab from '../components/ArticleTab.jsx';

import { getOneArticle } from '../services/articles.js'

import './styles/ViewArticle.css';

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

  const openTab = (e) => {
    // trying and failing to translate w3schools article into something usable here
  }

  return (
    <>
      <div className="tab">
        <button className="tablinks" onClick={openTab('Article')}>Article</button>
        <button className="tablinks" onClick={openTab('Comments')}>Comments</button>
      </div>

      <div id="Article" className="tabcontent">
        <ArticleTab article={article} />
      </div>

      <div id="Comments" className="tabcontent">
        <CommentsTab id={id} />
      </div>
    </>
  );
}