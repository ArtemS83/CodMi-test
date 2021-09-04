import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const fetchPosts = () => {
  return axios
    .get('/posts')
    .then(({ data }) => data)
    .catch(error => console.log('error', error));
};

const deletePost = id => {
  axios.delete(`/posts/${id}`).catch(error => console.log('error', error));
};

const addPost = newPost => {
  return axios
    .post('/posts', newPost)
    .then(({ data }) => data)
    .catch(error => console.log('error', error));
};

const updatePost = (id, body) => {
  return axios
    .patch(`/posts/${id}`, body)
    .then(({ data }) => data)
    .catch(error => console.log('error', error));
};

export default { fetchPosts, deletePost, addPost, updatePost };
