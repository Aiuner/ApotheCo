import api from './api-config'

export const getAllComments = async (id) => {
  const resp = await api.get(`/articles/${id}/comments`);
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

export const postComment = async (formData, id) => {
  const resp = await api.post(`/articles/${id}/comments`, { comment: formData })
  return resp.data;
}

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`)
  return resp.data;
}