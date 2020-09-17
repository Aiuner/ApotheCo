import api from './api-config'

export const getAllArticles = async () => {
  const resp = await api.get('/articles');
  return resp.data;
}

export const getOneArticle = async (id) => {
  const resp = await api.get(`/articles/${id}`);
  return resp.data;
}

export const updateArticle = async (id, formData) => {
  const resp = await api.put(`/articles/${id}`, { article: formData })
  return resp.data;
}

export const postArticle = async (formData) => {
  const resp = await api.post('/articles', { article: formData })
  return resp.data;
}

export const deleteArticle = async (id) => {
  const resp = await api.delete(`/articles/${id}`)
  return resp.data;
}