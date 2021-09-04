import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const fetchPosts = () => {
  return axios
    .get('/posts')
    .then(({ data }) => data)
    .catch(error => console.log('error', error));
};

const deletePosts = id => {
  axios.delete(`/posts/${id}`).catch(error => console.log('error', error));
};

const addPosts = newPost => {
  return axios
    .post('/posts', newPost)
    .then(({ data }) => data)
    .catch(error => console.log('error', error));
};

export default { fetchPosts, deletePosts, addPosts };
