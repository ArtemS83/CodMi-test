import { useState, useEffect } from 'react';
import apiServices from './services/postsApi';
import Posts from 'components/Posts';
import FormAddPost from 'components/FormAddPost';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiServices.fetchPosts().then(data => setPosts(data));
  }, []);

  const handleSubmitAddForm = post => {
    setPosts(prevState => [post, ...prevState]);
    apiServices.addPost(post);
  };

  const handleDeletePost = id => {
    setPosts(prevState => prevState.filter(post => post.id !== id));
    apiServices.deletePost(id);
  };

  const handleUpdatePost = (id, body) => {
    setPosts(
      prevState => prevState.map(post => (post.id === id ? { ...body } : post)),
      apiServices.updatePost(id, body),
    );
  };

  return (
    <>
      {posts.length > 0 ? (
        <>
          <h1>Posts</h1>
          <FormAddPost onSubmitAddForm={handleSubmitAddForm} />
          <Posts
            posts={posts}
            onDelete={handleDeletePost}
            onUpdate={handleUpdatePost}
          />
        </>
      ) : (
        <h1>No Posts</h1>
      )}
    </>
  );
};

export default App;
