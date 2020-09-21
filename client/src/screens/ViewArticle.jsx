import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import CommentsTab from '../components/CommentsTab.jsx';
import ArticleTab from '../components/ArticleTab.jsx';
import ArticleEditor from '../components/ArticleEditor.jsx';

import { getOneArticle, updateArticle, deleteArticle } from '../services/articles.js'
import { getAllComments, postComment } from '../services/comments.js';

import './styles/ViewArticle.css';

export default function ViewArticle(props) {
  const [article, setArticle] = useState([]);
  const [tabView, setTabView] = useState('Article');
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const { currentUser } = props;
  const history = useHistory();

  useEffect( () => {
    const fetchArticle = async () => {
      const theArticle = await getOneArticle(id);
      setArticle(theArticle);
    }
    const fetchComments = async () => {
      const allComments = await getAllComments(id);
      setComments(allComments);
    }
    fetchArticle(id);
    fetchComments(id);
  }, []);

  const openTab = (tab) => {
    setTabView(tab);
  }

  const handleSubmitComment = async (formData) => {
    const newComment = await postComment(formData, id);
    setComments(prevState => ([...prevState, newComment]));
  }

  const editThisArticle = async (formData) => {
    const editedArticle = await updateArticle(id, formData);
    setArticle(editedArticle);
  }

  const deleteThisArticle = async () => {
    await deleteArticle(id);
    history.push('/articles/index');
  }

  return (
    <>
      <div className="tab">
        <button className="tablinks" onClick={() => openTab('Article')}>Article</button>
        <button className="tablinks" onClick={() => openTab('Comments')}>Comments</button>
      </div>

      { tabView === 'Article' && 
        <div id="Article" className="tabcontent">
          <ArticleTab article={article} deleteThisArticle={deleteThisArticle} setTabView={setTabView} currentUser={currentUser} />
        </div>
      }

      { tabView === 'Edit' &&
        <div className="tabcontent">
          <ArticleEditor article={article} editThisArticle={editThisArticle} />
        </div>
      }

      { tabView === 'Comments' &&
        <div id="Comments" className="tabcontent">
          <CommentsTab comments={comments} handleSubmitComment={handleSubmitComment} currentUser={currentUser} />
        </div>
      }
    </>
  );
}