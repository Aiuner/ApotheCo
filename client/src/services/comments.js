import api from './api-config'

export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}

export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
}

export const updateComment = async (id, formData) => {
  const resp = await api.put(`/comments/${id}`, { comment: formData })
  return resp.data;
}

export const postComment = async (formData) => {
  const resp = await api.post('/comments', { comment: formData })
  return resp.data;
}

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`)
  return resp.data;
}